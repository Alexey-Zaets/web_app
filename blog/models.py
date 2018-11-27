from django.db import models
# Create your models here.

class Author(models.Model):
	name = models.CharField(max_length=63)

	def __str__(self):
		return self.name

class Tag(models.Model):
	title = models.CharField(max_length=63)

	def __str__(self):
		return self.title

class PostContent(models.Model):
	text = models.TextField()

	def __str__(self):
		return self.text

class Post(models.Model):
	author = models.ForeignKey(Author, on_delete=models.DO_NOTHING)
	description = models.CharField(max_length=250, blank=False)
	tags = models.ManyToManyField(Tag)
	title = models.CharField(max_length=127)
	content = models.OneToOneField(PostContent, on_delete=models.CASCADE)
	image = models.ImageField(upload_to='media/')
	pub_date = models.DateField(auto_now_add=True)

	def __str__(self):
		return self.title

	@property
	def not_even(self):
		return self.id%2!=0

	class Meta:
		ordering = ['-pub_date']
		managed = True