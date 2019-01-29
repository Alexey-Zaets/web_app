from __future__ import absolute_import, unicode_literals
from celery import shared_task
from blog.models import Post
from analytics.models import PostStatus, Viewers


@shared_task
def add_viewer(post_id, user_ip):
    already_viewed = Viewers.objects.raw(
        "select 1 as id, viewer from analytics_viewers "
        "where post_id=%s;",
        [post_id]
        )
    already_viewed = (i.viewer for i in already_viewed)
    post = Post.objects.get(id=post_id)
    if user_ip not in already_viewed:
        Viewers.objects.create(post=post, viewer=user_ip)
        post_status_obj = PostStatus.objects.get(post=post)
        post_status_obj.views += 1
        post_status_obj.save()