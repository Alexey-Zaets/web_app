from django.core.mail import send_mail, BadHeaderError
from django.core.cache import cache
from .models import Post, Comment
from analytics.models import PostStatus
from Blog.celery import app


@app.task
def send_contact_mail(name, email, message):
	try:
		mail_message = "{}\n\n{}\n{}".format(
			message, name, email
			)
		send_mail(
			name,
			mail_message,
			'djangotest2019@gmail.com',
			['djangotest2019@gmail.com'],
			fail_silently=False
			)
	except BadHeaderError:
		pass

@app.task
def load_to_cache(post_id):
	post = Post.objects.get(id=post_id)
	status = PostStatus.objects.get(post=post).to_dict()
	post = post.to_dict()
	post.update(status)
	if cache.get(post_id) is not None:
		if cache.get(post_id) != post:
			cache.set(post['id'], post)
	else:
		cache.set(post['id'], post)