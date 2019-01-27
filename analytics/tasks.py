from Blog.celery import app
from blog.models import Post
from analytics.models import PostStatus, Viewers


@app.task
def add_viewer(post_id, user_ip):
    already_viewed = Viewers.objects.raw(
        "select 1 as id, viewer from analytics_viewers "
        "where post_id=%s;",
        [post_id]
        )
    already_viewed = (i.viewer for i in already_viewed)
    if user_ip not in already_viewed:
        obj = Viewers.objects.get(post=post)
        obj(viewer=user_ip).save()
        post_status_obj = PostStatus.objects.get(post=post)
        post_status_obj.views += 1
        post_status_obj.save()