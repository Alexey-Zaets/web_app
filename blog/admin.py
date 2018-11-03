from django.contrib import admin
from .models import Post, Author, Tag, PostContent, Status

class PostAdmin(admin.ModelAdmin):
	fieldsets = [
		('Post tags', {'fields':['tags', 'status']}),
		('Post content', {'fields':['title', 'content', 'image', 'author']})
	]
	ordering = ['title']
	list_display = ['title', 'author']
	date_hierarchy = 'pub_date'
	filter_horizontal = ['tags']

admin.site.register(Post, PostAdmin)
admin.site.register(Author)
admin.site.register(Tag)
admin.site.register(PostContent)
admin.site.register(Status)