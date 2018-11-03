from django.http import Http404
from django.views.generic.base import TemplateView
from blog.models import Post, Tag, Author
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

# Create your views here.
def listing(request, query_set):
	page = request.GET.get('page', 1)
	search = request.GET.get('search', None)
	paginator = Paginator(query_set, 3)
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
		return {'authors': self.authors, 'tags': self.tags}

class HomePageView(TemplateView, TagMixin):
	http_method_names = ['get']
	template_name = 'index.html'

	def get_context_data(self, **kwargs):
		if self.request.is_ajax():
			self.template_name = 'item.html'
		context = super().get_context_data(**kwargs)
		context.update(listing(self.request, Post.objects.all()))
		context.update(super().mix())
		return context

class AboutPageView(TemplateView):
	http_method_names = ['get']
	template_name = 'about.html'

	def get_context_data(self, **kwargs):
		context = super().get_context_data(**kwargs)
		return context

class PostPageView(TemplateView):
	http_method_names = ['get']
	template_name = 'post.html'

	def get_context_data(self, **kwargs):
		id = kwargs['id']
		context = super().get_context_data(**kwargs)
		try:
			context['post'] = Post.objects.get(id=id)
		except Post.DoesNotExist:
			raise Http404
		return context

class SearchPageView(TemplateView, TagMixin):
	http_method_names = ['get']
	template_name = 'search_result.html'

	def get_context_data(self, **kwargs):
		if self.request.is_ajax():
			self.template_name = 'item.html'
		search = self.request.GET['search']
		context = super().get_context_data(**kwargs)
		if search == '':
			context['posts'] = None
		else:
			try:
				query_set = Post.objects.filter(title__icontains=search)
				assert(query_set.exists())
				context.update(listing(self.request, query_set))
			except AssertionError:
				context['posts'] = False
		context.update(super().mix())
		return context

class TagPageView(TemplateView, TagMixin):
	http_method_names = ['get']
	template_name = 'search_result.html'

	def get_context_data(self, **kwargs):
		if self.request.is_ajax():
			self.template_name = 'item.html'
		tag = kwargs['tag']
		context = super().get_context_data(**kwargs)
		try:
			assert(Post.objects.filter(tags__title=tag).exists())
			context.update(listing(self.request, Post.objects.filter(tags__title=tag)))
		except AssertionError:
			raise Http404
		context.update(super().mix())
		return context

class AuthorPostsView(TemplateView, TagMixin):
	http_method_names = ['get']
	template_name = 'search_result.html'

	def get_context_data(self, **kwargs):
		if self.request.is_ajax():
			self.template_name = 'item.html'
		author = kwargs['author']
		context = super().get_context_data(**kwargs)
		try:
			query_set = Post.objects.filter(author__name=author)
			assert(query_set.exists())
			context.update(listing(self.request,query_set))
		except AssertionError:
			raise Http404
		context.update(super().mix())
		return context