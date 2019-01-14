from django.db import models
from blog.models import Post
from django.db.models.signals import post_save
from django.dispatch import receiver


class Viewers(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    viewer = models.CharField(max_length=120)


class WhoLiked(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    who_liked = models.CharField(max_length=120)


class PostStatus(models.Model):
    post = models.OneToOneField(Post, on_delete=models.DO_NOTHING)
    views = models.IntegerField('Просмотры', default=0)
    likes = models.IntegerField('Лайки', default=0)

    def __str__(self):
        return self.post.title

    def to_dict(self):
        return {
            'views': self.views,
            'likes': self.likes,
        }

    class Meta:
        managed = True


@receiver(post_save, sender=Post)
def status_create(sender, **kwargs):
    if kwargs['created']:
        PostStatus.objects.create(post=kwargs['instance'])