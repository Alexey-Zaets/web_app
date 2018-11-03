from django.test import TestCase
from .views import HomePageView, PostPageView, SearchPageView, TagPageView, AuthorPostsView
from .models import Author, Post, Tag

# Create your tests here.
class HomePageViewTest(TestCase):
	def test_view_with_no_page(self):
		response = self.client.get('')
		self.assertEqual(response.status_code, 200)

class PostPageViewTest(TestCase):
	def test_view_with_id(self):
		for i in range(10):
			url = '/post/{}/'.format(str(i))
			response = self.client.get(url)
			if i in [post.id for post in Post.objects.all()]:
				self.assertEqual(response.status_code, 200)
			else:
				self.assertEqual(response.status_code, 404)

class SearchPageViewTest(TestCase):
	def test_search_view(self):
		url = '/search/'
		response = self.client.get(url, {'search': ''})
		self.assertEqual(response.status_code, 200)
		self.assertEqual(response.context['posts'], None)
		response = self.client.get(url, {'search': 'not in db'})
		self.assertEqual(response.status_code, 200)
		self.assertEqual(response.context['posts'], False)
		response = self.client.get(url, {'search': 'python'})
		self.assertEqual(response.status_code, 200)

class TagPageViewTest(TestCase):
	def test_tag_select(self):
		for i in ['docker', 'javascript', 'test']:
			url = '/tag/{}/'.format(i)
			response = self.client.get(url)
			self.assertEqual(response.status_code, 404)
		for i in Tag.objects.all():
			url = '/tag/{}/'.format(i)
			response = self.client.get(url)
			self.assertEqual(response.status_code, 200)

class AuthorPostsViewTest(TestCase):
	def test_author_select(self):
		for i in ['Jack', 'David', 'test']:
			url = '/author/{}/'.format(i)
			response = self.client.get(url)
			self.assertEqual(response.status_code, 404)
		for i in Author.objects.all():
			url = '/author/{}/'.format(i)
			response = self.client.get(url)
			self.assertEqual(response.status_code, 200)