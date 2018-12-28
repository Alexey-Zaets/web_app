from django.contrib import admin
from analytics.models import PostStatus
from .models import Post

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
	fieldsets = [
		('Post tags', {'fields':['tags']}),
		('Post content', {'fields':['title', 'description', 'content', 'image', 'author']})
		]
	ordering = ['title']
	list_display = ['title', 'author']
	date_hierarchy = 'pub_date'
	filter_horizontal = ['tags']

admin.site.register(PostStatus)
