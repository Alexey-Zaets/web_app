from django.http import Http404, HttpResponseRedirect, HttpResponse
from django.shortcuts import render
from django.views.generic.base import View, TemplateView
from django.views.generic.list import ListView
from blog.models import Post, Tag, Author
from django.core.cache import cache
from django.core.mail import send_mail, BadHeaderError


class TagMixin:
	authors = Author.objects.all()
	tags = Tag.objects.all()

	def mix(self):
		return {
			'authors': self.authors,
			'tags': self.tags,
			}

class HomePageView(ListView, TagMixin):
	model = Post
	http_method_names = ['get']
	template_name = 'index.html'
	paginate_by = 6

	def get_context_data(self, **kwargs):
		context = super(HomePageView, self).get_context_data(**kwargs)
		context.update(TagMixin.mix(self))
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
		print(request.POST)
		name = request.POST.get('name', '')
		company = request.POST.get('company', '')
		from_email = request.POST.get('email', '')
		message = request.POST.get('message', '')
		if name and company and from_email and message:
			try:
				send_mail(name, message, from_email, ['3aets.dev@gmail.com'])
			except BadHeaderError:
				return HttpResponse('Invalide header found.')
			return HttpResponseRedirect('/contact/')
		else:
			return HttpResponse('Убедитесь, что все поля заполнены')


class PostPageView(TemplateView, TagMixin):
	http_method_names = ['get']
	template_name = 'post.html'

	def get_context_data(self, **kwargs):
		identificator = kwargs['id']
		context = super(PostPageView, self).get_context_data(**kwargs)
		try:
			post = Post.objects.get(id=identificator)
		except Post.DoesNotExist:
			raise Http404
		name = post.title
		content = cache.get(name)
		if content is None:
			content = post.content
			cache.set(name, content)
		context.update({'post':post, 'content':content})
		context.update(TagMixin.mix(self))
		return context


class SearchPageView(ListView, TagMixin):
	http_method_names = ['get']
	template_name = 'search_result.html'
	model = Post
	paginate_by = 6

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
		return context


class TagPageView(ListView, TagMixin):
	http_method_names = ['get']
	template_name = 'search_result.html'
	model = Post
	paginate_by = 6

	def get_queryset(self):
		qs = super(TagPageView, self).get_queryset()
		tag = self.kwargs.get('tag')
		if tag is not None:
			qs = qs.filter(tags__title=tag)
		return qs

	def get_context_data(self, **kwargs):
		context = super(TagPageView, self).get_context_data(**kwargs)
		if not context['object_list'].exists():
			context['message'] = 'Нет записей с таким тэгом'
		context.update(TagMixin.mix(self))
		return context


class AuthorPostsView(ListView, TagMixin):
	http_method_names = ['get']
	template_name = 'search_result.html'
	model = Post
	paginate_by = 6

	def get_queryset(self):
		qs = super(AuthorPostsView, self).get_queryset()
		author = self.kwargs.get('author')
		if author is not None:
			qs = qs.filter(author__name=author)
		return qs

	def get_context_data(self, **kwargs):
		context = super(AuthorPostsView, self).get_context_data(**kwargs)
		if not context['object_list'].exists():
			context['message'] = 'Нет такого автора'
		context.update(TagMixin.mix(self))
		return context