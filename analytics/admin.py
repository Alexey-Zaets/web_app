from django.contrib import admin
from analytics.models import PostStatus
# Register your models here.


@admin.register(PostStatus)
class PostStatusAdmin(admin.ModelAdmin):
	field = ['post', 'views', 'likes']