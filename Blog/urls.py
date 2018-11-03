"""Blog URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path
from django.conf import settings
from django.conf.urls.static import static
from blog.views import HomePageView, PostPageView, SearchPageView, TagPageView, AboutPageView, AuthorPostsView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', HomePageView.as_view()),
    path('about/', AboutPageView.as_view()),
    path('post/<int:id>/', PostPageView.as_view()),
    path('tag/<str:tag>/', TagPageView.as_view()),
    path('author/<str:author>/', AuthorPostsView.as_view()),
    path('search/', SearchPageView.as_view()),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
