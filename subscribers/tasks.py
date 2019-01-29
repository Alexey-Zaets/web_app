from __future__ import absolute_import, unicode_literals
from celery import shared_task
import smtplib
from Blog.settings import EMAIL_HOST_USER, EMAIL_HOST_PASSWORD
from blog.models import Post


@shared_task
def mailing(email, post_id):
	post = Post.objects.get(id=post_id)
	fadd = 'djangotest2019@gmail.com'
	tadd = email
	username = EMAIL_HOST_USER
	password = EMAIL_HOST_PASSWORD
	server = smtplib.SMTP('smtp.gmail.com', 587)
	server.ehlo()
	server.starttls()
	server.login(username, password)
	server.sendmail(fadd, tadd, post.content.text)