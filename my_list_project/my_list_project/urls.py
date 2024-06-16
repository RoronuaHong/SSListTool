"""
URL configuration for my_list_project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
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
from django.conf import settings
from django.contrib import admin
from django.urls import path, re_path
from django.views.static import serve

import helloWorld.views

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('index/', helloWorld.views.index),
    # path('blog/<int:id>', helloWorld.views.blog),
    # re_path('blog3/(?P<year>[0-9]{4})/(?P<month>[0-9]{2})/(?P<day>[0-9]{2})', helloWorld.views.blog2),
    # 配置媒体文件的路由地址
    re_path('media/(?P<path>.*)', serve, { 'document_root': settings.MEDIA_ROOT }, name='media'),

    path('', helloWorld.views.IndexView.as_view(), name='index'),
]
