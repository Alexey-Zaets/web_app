from django.db.models import Q
from django.http import Http404, HttpResponseRedirect, HttpResponse
from django.shortcuts import render
from django.views.generic.base import View, TemplateView
from django.views.generic.list import ListView
from blog.models import Post, Tag, Author, Comment
from django.core.cache import cache
from blog.tasks import send_contact_mail, load_to_cache
from celery import group
from analytics.models import PostStatus, WhoLiked
from analytics.tasks import add_viewer


class TagMixin:
	authors =[author.name for author in Author.objects.all()]
	tags = [tag.title for tag in Tag.objects.all()]

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
		name = request.POST.get('name', '').strip()
		email = request.POST.get('email', '').strip()
		message = request.POST.get('message', '').strip()
		if name and email and message:
			send_contact_mail.delay(
				name, email, message
				)
			return HttpResponseRedirect('/contact/')
		else:
			return HttpResponse('Убедитесь, что все поля заполнены верно')


class PostPageView(TemplateView, TagMixin):
	http_method_names = ['get']
	template_name = 'post.html'

	def get_context_data(self, **kwargs):
		post_id = kwargs['id']
		user_ip = self.request.META.get('REMOTE_ADDR')
		add_viewer.delay(post_id, user_ip)
		context = super(PostPageView, self).get_context_data(**kwargs)
		post = cache.get(post_id)
		if post is None:
			post = Post.objects.get(id=post_id)
			status = PostStatus.objects.get(post=post).to_dict()
			post = post.to_dict()
			post.update(status)
			cache.set(post['id'], post)
			post = cache.get(post_id)
		already_liked = WhoLiked.objects.raw(
			"select 1 as id, who_liked from analytics_wholiked "
			"where post_id=%s;",
			[post_id]
			)
		already_liked = (i.who_liked for i in already_liked)
		already_liked = True if user_ip in already_liked else False
		context['already_liked'] = already_liked
		context.update(post)
		context.update(TagMixin.mix(self))
		return context


class AddComment(View):
	http_method_names = ['post']

	def post(self, request, **kwargs):
		post_id = kwargs['id']
		post = Post.objects.get(id=post_id)
		url = request.META.get('HTTP_REFERER')
		comment = request.POST.get('comment', '').strip()
		if comment:
			obj, created = Comment.objects.get_or_create(
				post=post,
				username=request.user.username,
				comment=comment
				)
			load_to_cache.delay(post_id)
		return HttpResponseRedirect(url)


class SearchPageView(ListView, TagMixin):
	http_method_names = ['get']
	template_name = 'search_result.html'
	model = Post
	paginate_by = 4

	def get_queryset(self):
		qs = super(SearchPageView, self).get_queryset()
		search = self.request.GET.get('search', '').strip()
		if search:
			qs = qs.filter(
				Q(title__icontains=search) | \
				Q(content__text__icontains=search) | \
				Q(description__icontains=search)
			)
		return qs

	def get_context_data(self, **kwargs):
		context = super(SearchPageView, self).get_context_data(**kwargs)
		if not context['object_list'].exists():
			context['message'] = 'По вашему запросу ничего не найдено' 
		context.update(TagMixin.mix(self))
		search = self.request.GET.get('search')
		context['url'] = self.request.path + '?search=' + search + '&'
		object_list = (post.id for post in context['object_list'])
		group(load_to_cache.s(i) for i in object_list)()
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