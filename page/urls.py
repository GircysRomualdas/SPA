from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('<str:num>', views.indexPar, name='index'),
    path('nav/<str:num>', views.item, name='item'),
    path('img/<str:num>', views.itemimg, name='itemimg'),
    path('vid/', views.video, name='video'),
]
