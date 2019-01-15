from django.shortcuts import render
from django.views.generic.base import View
from analytics.models import WhoLiked, PostStatus
from blog.models import Post


# Create your views here.
class AddLike(View):
    template_name = 'like.html'
    http_method_names = ['get']

    def get(self, request, **kwargs):
        post_id = kwargs['id']
        post = Post.objects.get(id=post_id)
        user_ip = request.META.get('REMOTE_ADDR')
        obj = WhoLiked.objects.get(post=post)
        obj(who_liked=user_ip).save()
        post_status_obj = PostStatus.objects.get(post=post)
        post_status_obj.likes += 1
        post_status_obj.save()
        return render(
            self.request,
            self.template_name,
            {
                'likes': post_status_obj.likes,
                'already_liked': already_liked
            }
        )