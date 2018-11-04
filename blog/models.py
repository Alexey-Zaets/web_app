from django.db import models
# Create your models here.

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
	image = models.ImageField(upload_to='images/')
	pub_date = models.DateField(auto_now_add=True)

	def __str__(self):
		return self.title

	class Meta:
		ordering = ['-pub_date']