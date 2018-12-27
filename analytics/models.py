from django.db import models
from blog.models import Post
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.


class PostStatus(models.Model):
	post = models.OneToOneField(Post, on_delete=models.DO_NOTHING)
	views = models.IntegerField(default=0)
	likes = models.IntegerField(default=0)

	class Meta:
		managed = True


@receiver(post_save, sender=Post)
def status_create(sender, **kwargs):
	if kwargs['created']:
		post_status = PostStatus.objects.create(post=kwargs['instance'])