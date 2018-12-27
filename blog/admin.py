from django.contrib import admin
from analytics.models import PostStatus
from .models import Post, Author, Tag, PostContent


class PostAdmin(admin.ModelAdmin):
	fieldsets = [
		('Post tags', {'fields':['tags']}),
		('Post content', {'fields':['title', 'description', 'content', 'image', 'author']})
		]
	ordering = ['title']
	list_display = ['title', 'author']
	date_hierarchy = 'pub_date'
	filter_horizontal = ['tags']

admin.site.register(Post, PostAdmin)
admin.site.register(Author)
admin.site.register(Tag)
admin.site.register(PostContent)
admin.site.register(PostStatus)