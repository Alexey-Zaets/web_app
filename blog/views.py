from django.http import Http404
from django.shortcuts import render
from django.views.generic.base import View, TemplateView
from django.views.generic.list import ListView
from blog.models import Post, Tag, Author
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.core.cache import cache

# Create your views here.
def listing(request, query_set):
	page = request.GET.get('page', 1)
	search = request.GET.get('search', None)
	paginator = Paginator(query_set, 6)
	try:
		page = paginator.page(page)
	except PageNotAnInteger:
		page = paginator.page(1)
	except EmptyPage:
		page = paginator.page(paginator.num_pages)
	if search is not None:
		paginator.baseurl = request.path + '?search=' + search
	else:
		paginator.baseurl = request.path
	return {
		'posts': page.object_list,
		'page': page,
		'paginator': paginator,
	}

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
		print(self.__dict__)
		context = super(HomePageView, self).get_context_data(**kwargs)
		context.update(TagMixin.mix(self))
		return context

class AboutPageView(View):
	http_method_names = ['get']
	template_name = 'about.html'

	def get(self, request):
		return render(self.request, self.template_name, {})

class ContactPageView(View):
	http_method_names = ['get']
	template_name = 'contact.html'

	def get(self, request):
		return render(self.request, self.template_name, {})

class PostPageView(TemplateView, TagMixin):
	http_method_names = ['get']
	template_name = 'post.html'

	def get_context_data(self, **kwargs):
		identificator = kwargs['id']
		context = super().get_context_data(**kwargs)
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

class SearchPageView(TemplateView, TagMixin):
	http_method_names = ['get']
	template_name = 'search_result.html'

	def get_queryset(self):
		pass

	def get_context_data(self, **kwargs):
		if self.request.is_ajax():
			self.template_name = 'item.html'
		search = self.request.GET['search']
		context = super(SearchPageView, self).get_context_data(**kwargs)
		context.update(TagMixin.mix(self))
		if search == '':
			context['posts'] = None
		else:
			try:
				query_set = Post.objects.filter(title__icontains=search)
				assert(query_set.exists())
				context.update(listing(self.request, query_set))
			except AssertionError:
				context['posts'] = False
		return context

class TagPageView(ListView, TagMixin):
	http_method_names = ['get']
	template_name = 'search_result.html'
	model = Post
	paginate_by = 6

	def get_queryset(self):
		qs = super(TagPageView, self).get_queryset()
		try:
			assert(qs.filter(tags__title=self.kwargs['tag']))
			return qs.filter(tags__title=self.kwargs['tag'])
		except AssertionError:
			raise Http404

	def get_context_data(self, **kwargs):
		print(self.__dict__)
		context = super(TagPageView, self).get_context_data(**kwargs)
		context.update(TagMixin.mix(self))
		print(context)
		return context

class AuthorPostsView(TemplateView, TagMixin):
	http_method_names = ['get']
	template_name = 'search_result.html'

	def get_queryset(self):
		pass

	def get_context_data(self, **kwargs):
		author = kwargs['author']
		context = super(AuthorPostsView, self).get_context_data(**kwargs)
		context.update(TagMixin.mix(self))
		try:
			query_set = Post.objects.filter(author__name=author)
			assert(query_set.exists())
			context.update(listing(self.request,query_set))
		except AssertionError:
			raise Http404
		return context