from django.db import models
from django.conf import settings
from django.core.files.storage import FileSystemStorage
# Create your models here.
file_storage = FileSystemStorage(location='web_app/media')

class Author(models.Model):
	name = models.CharField(max_length=63)
	email = models.EmailField(blank=True)

	def __str__(self):
		return self.name

class Status(models.Model):
	views = models.IntegerField(default=0)
	likes = models.IntegerField(default=0)

class Tag(models.Model):
	title = models.CharField(max_length=63)

	def __str__(self):
		return self.title

class PostContent(models.Model):
	text = models.TextField()

	def __str__(self):
		return '{}'.format(self.id)

class Post(models.Model):
	author = models.ForeignKey(Author, on_delete=models.DO_NOTHING)
	tags = models.ManyToManyField(Tag)
	status = models.ForeignKey(Status, on_delete=models.CASCADE)
	title = models.CharField(max_length=127)
	content = models.OneToOneField(PostContent, on_delete=models.CASCADE)
	image = models.ImageField(blank=False, null=False, storage=file_storage)
	pub_date = models.DateField(auto_now_add=True)

	def __str__(self):
		return self.title

	class Meta:
		ordering = ['-pub_date']