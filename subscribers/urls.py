from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from subscribers.views import SubscribeView

urlpatterns = [
    path('', csrf_exempt(SubscribeView.as_view())),
]