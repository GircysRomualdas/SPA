from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.core import serializers

from .models import *

def index(request):
    context = {}
    return render(request, 'index.html', context)

def indexPar(request, num):
    context = {
        'page': num,
    }
    return render(request, 'index.html', context)

def itemimg(request, num):
    content = Content.objects.get(subtitle=num)
    return HttpResponse(content.img)

def video(request):
    videos = Vidio.objects.all()
    # context = serializers.serialize('json', video)
    context = [{'subtitle':video.subtitle, 'video':video.video} for video in videos]
    return JsonResponse(context, safe=False)
    
def item(request, num):
    content = Content.objects.get(subtitle=num)

    img = False
    if(content.img):
        img = True

    context = {
        'subtitle': content.subtitle,
        'title': content.title,
        'text': content.text,
        'img': img,
        'vidio': content.video,
    }
    return JsonResponse(context)           

    
