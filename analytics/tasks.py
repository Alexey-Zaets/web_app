from Blog.celery import app
from blog.models import Post
from analytics.models import PostStatus, Viewers, WhoLiked


@app.task
def add_viewer(post_id, user_ip):
    post = Post.objects.get(id=post_id)
    try:
        Viewers.objects.get(post=post, viewer=user_ip)
    except Viewers.DoesNotExist:
        obj, created = Viewers.objects.get_or_create(
            post=post,
            viewer=user_ip
        )
        post_status_obj = PostStatus.objects.get(post=post)
        post_status_obj.views += 1
        post_status_obj.save()