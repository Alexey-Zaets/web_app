from django.db import models
from django.core.validators import EmailValidator


class Subscribers(models.Model):
	email = models.EmailField(
		'Подписчик',
		blank=False,
		unique=True,
		validators=[EmailValidator]
		)

	def __str__(self):
		return self.email