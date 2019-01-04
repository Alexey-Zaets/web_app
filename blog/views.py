from django.http import Http404, HttpResponseRedirect, HttpResponse
from django.shortcuts import render
from django.views.generic.base import View, TemplateView
from django.views.generic.list import ListView
from blog.models import Post, Tag, Author
from django.core.cache import cache
from .tasks import send_contact_mail, load_to_cache
from celery import group


class TagMixin:
	authors = Author.objects.all()
	tags = Tag.objects.all()

	def mix(self):
		return {
			'authors': self.authors,
			'tags': self.tags,
			}


class ListPageView(ListView, TagMixin):
	http_method_names = ['get']
	template_name = 'search_result.html'
	model = Post
	paginate_by = 4

	def get_context_data(self, **kwargs):
		context = super(ListPageView, self).get_context_data(**kwargs)
		context.update(TagMixin.mix(self))
		context['url'] = self.request.path + '?'
		object_list = (post.id for post in context['object_list'])
		group(load_to_cache.s(i) for i in object_list)()
		return context


class HomePageView(ListPageView):
	template_name = 'index.html'

	def get_context_data(self, **kwargs):
		context = ListPageView.get_context_data(self, **kwargs)
		return context


class AboutPageView(View):
	http_method_names = ['get']
	template_name = 'about.html'

	def get(self, request):
		return render(self.request, self.template_name, {})


class ContactPageView(View):
	http_method_names = ['get', 'post']
	template_name = 'contact.html'

	def get(self, request):
		return render(self.request, self.template_name, {})

	def post(self, request):
		name = request.POST.get('name', '')
		company = request.POST.get('company', '')
		email = request.POST.get('email', '')
		message = request.POST.get('message', '')
		if name and company and email and message:
			result = send_contact_mail.delay(
				name, company, email, message
				)
			return HttpResponseRedirect('/contact/')
		else:
			return HttpResponse('Убедитесь, что все поля заполнены')


class PostPageView(TemplateView, TagMixin):
	http_method_names = ['get']
	template_name = 'post.html'

	def get_context_data(self, **kwargs):
		identificator = kwargs['id']
		context = super(PostPageView, self).get_context_data(**kwargs)
		post = cache.get(identificator)
		if post is not None:
			context.update(post)
		context.update(TagMixin.mix(self))
		print(post)
		return context


class SearchPageView(ListView, TagMixin):
	http_method_names = ['get']
	template_name = 'search_result.html'
	model = Post
	paginate_by = 4

	def get_queryset(self):
		qs = super(SearchPageView, self).get_queryset()
		search = self.request.GET.get('search')
		if search is not None:
			qs = qs.filter(title__icontains=search)
		return qs

	def get_context_data(self, **kwargs):
		context = super(SearchPageView, self).get_context_data(**kwargs)
		if not context['object_list'].exists():
			context['message'] = 'По вашему запросу ничего не найдено' 
		context.update(TagMixin.mix(self))
		search = self.request.GET.get('search')
		context['url'] = self.request.path + '?search=' + search + '&'
		return context


class TagPageView(ListPageView):

	def get_queryset(self):
		qs = super(TagPageView, self).get_queryset()
		tag = self.kwargs.get('tag')
		if tag is not None:
			try:
				qs = qs.filter(tags__title=tag)
			except Post.DoesNotExist:
				raise Http404
		return qs

	def get_context_data(self, **kwargs):
		context = ListPageView.get_context_data(self, **kwargs)
		return context


class AuthorPostsView(ListPageView):

	def get_queryset(self):
		qs = super(AuthorPostsView, self).get_queryset()
		author = self.kwargs.get('author')
		if author is not None:
			try:
				qs = qs.filter(author__name=author)
			except Post.DoesNotExist:
				raise Http404
		return qs

	def get_context_data(self, **kwargs):
		context = ListPageView.get_context_data(self, **kwargs)
		return context