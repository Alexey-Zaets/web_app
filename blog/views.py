from django.http import Http404
from django.shortcuts import render
from django.views.generic.base import View
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

class HomePageView(View, TagMixin):
	http_method_names = ['get']
	template_name = 'index.html'

	def get(self, request):
		if self.request.is_ajax():
			self.template_name = 'item.html'
		context = super().mix()
		context.update(listing(self.request, Post.objects.all()))
		return render(self.request, self.template_name, context)

class AboutPageView(View):
	http_method_names = ['get']
	template_name = 'about.html'

	def get(self, request):
		return render(self.request, self.template_name, {})

class PostPageView(View):
	http_method_names = ['get']
	template_name = 'post.html'

	def get(self, request):
		id = self.request.GET['id']
		context={}
		try:
			context['post'] = Post.objects.get(id=id)
			return render(self.request, self.template_name, context)
		except Post.DoesNotExist:
			raise Http404

class SearchPageView(View, TagMixin):
	http_method_names = ['get']
	template_name = 'search_result.html'

	def get(self, request):
		if self.request.is_ajax():
			self.template_name = 'item.html'
		search = self.request.GET['search']
		context = super().mix()
		if search == '':
			context['posts'] = None
		else:
			try:
				query_set = Post.objects.filter(title__icontains=search)
				assert(query_set.exists())
				context.update(listing(self.request, query_set))
			except AssertionError:
				context['posts'] = False
		return render(self.request, self.template_name, context)

class TagPageView(View, TagMixin):
	http_method_names = ['get']
	template_name = 'search_result.html'

	def get(self, request):
		if self.request.is_ajax():
			self.template_name = 'item.html'
		tag = self.request.GET['tag']
		context = super().mix()
		try:
			assert(Post.objects.filter(tags__title=tag).exists())
			context.update(listing(self.request, Post.objects.filter(tags__title=tag)))
		except AssertionError:
			raise Http404
		return render(self.request, self.template_name, context)

class AuthorPostsView(View, TagMixin):
	http_method_names = ['get']
	template_name = 'search_result.html'

	def get(self, request):
		if self.request.is_ajax():
			self.template_name = 'item.html'
		author = self.request.GET['author']
		context = super().mix()
		try:
			query_set = Post.objects.filter(author__name=author)
			assert(query_set.exists())
			context.update(listing(self.request,query_set))
		except AssertionError:
			raise Http404
		return render(self.request, self.template_name, context)