from django.shortcuts import render
from django.views.generic.base import View

# Create your views here.
class AddLike(View):
    template_name = 'like.html'
    http_method_names = ['get']

    def get(self, request, **kwargs):
        return render(
            self.request,
            self.template_name,
            {}
        )