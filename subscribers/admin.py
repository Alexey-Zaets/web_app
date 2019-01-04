from django.contrib import admin
from subscribers.models import Subscribers


@admin.register(Subscribers)
class SubscribersAdmin(admin.ModelAdmin):
	fields = ['email']
