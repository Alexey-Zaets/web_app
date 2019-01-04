import smtplib
from Blog.celery import app
from blog.models import Post


@app.task
def mailing(email, post_id):
	post = Post.objects.get(id=post_id)
	fadd = 'djangotest2019@gmail.com'
	tadd = email
	username = 'djangotest2019@gmail.com'
	password = 'testdjangoaccount'
	server = smtplib.SMTP('smtp.gmail.com', 587)
	server.ehlo()
	server.starttls()
	server.login(username, password)
	server.sendmail(fadd, tadd, post.content.text)