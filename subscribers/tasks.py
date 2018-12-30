from django.core.mail import send_mail
from Blog.celery import app
from blog.models import Post


@app.task
def mailing(email, post_id):
	post = Post.objects.get(id=post_id)
	mail = send_mail(
		post.title,
		post.content.text,
		'djangotest2019@gmail.com',
		[email],
		fail_silently=False
		)