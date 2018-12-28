from django.core.mail import send_mail, BadHeaderError
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
