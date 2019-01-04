from django.core.mail import send_mail, BadHeaderError
from django.core.cache import cache
from .models import Post
from Blog.celery import app


@app.task
def send_contact_mail(name, company, email, message):
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
	post = Post.objects.get(id=post_id).to_dict()
	if cache.get(post['id']) is not None:
		pass
	else:
		cache.set(post['id'], post)