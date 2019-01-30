from django.contrib import admin
from .models import Post, Tag, Author, PostContent, Comment, Citation


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
	fieldsets = [
		('Post tags', {'fields':['tags']}),
		('Post content',
			{'fields':['title','description','content','image','author']}
			)
		]
	ordering = ['title']
	list_display = ['title', 'author']
	date_hierarchy = 'pub_date'
	filter_horizontal = ['tags']


admin.site.register(PostContent)
admin.site.register(Author)
admin.site.register(Tag)
admin.site.register(Comment)
admin.site.register(Citation)