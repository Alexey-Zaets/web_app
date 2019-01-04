from django.db import models
from blog.models import Post
from django.db.models.signals import post_save
from django.dispatch import receiver


class PostStatus(models.Model):
	post = models.OneToOneField(Post, on_delete=models.DO_NOTHING)
	views = models.IntegerField('Просмотры', default=0)
	likes = models.IntegerField('Лайки', default=0)

	def __str__(self):
		return self.post.title

	class Meta:
		managed = True


@receiver(post_save, sender=Post)
def status_create(sender, **kwargs):
	if kwargs['created']:
		post_status = PostStatus.objects.create(post=kwargs['instance'])