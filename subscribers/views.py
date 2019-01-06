from django.shortcuts import render
from django.http import HttpResponseRedirect
from .models import Subscribers
from django.views.generic.base import View


class SubscribeView(View):
	http_method_names = ['post']

	def post(self, request):
		email = request.POST.get('email')
		url = request.META.get('HTTP_REFERER')
		if email.isalnum():
			try:
				Subscribers.objects.create(email=email)
			except IntegrityError:
				message = 'Такой email уже существует'
		return HttpResponseRedirect(url)