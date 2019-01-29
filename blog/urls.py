from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from .views import PostPageView, AddComment
from analytics.views import AddLike

urlpatterns = [
    path('<int:id>/', PostPageView.as_view()),
    path('<int:id>/add/', csrf_exempt(AddComment.as_view())),
    path('<int:id>/addlike/', AddLike.as_view()),
]