from django.db import models
from blog.models import Post
from django.core.validators import EmailValidator
from django.db.models.signals import post_save
from django.dispatch import receiver
from .tasks import mailing
from celery import group


class Subscribers(models.Model):
	email = models.EmailField(
		'Подписчик',
		blank=False,
		unique=True,
		validators=[EmailValidator]
		)

	def __str__(self):
		return self.email


@receiver(post_save, sender=Post)
def distribution(sender, **kwargs):
	if kwargs['created']:
		post_id = kwargs['instance'].id
		subscribers = Subscribers.objects.all().iterator(chunk_size=1000)
		group(mailing.s(i.email, post_id) for i in subscribers)()