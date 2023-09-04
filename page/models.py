from django.db import models
from  embed_video.fields  import  EmbedVideoField

class Content(models.Model):
    subtitle = models.CharField(max_length=100, null=False, blank=False, unique=True)
    title = models.CharField(max_length=100, null=True, blank=True)
    text = models.TextField(null=True, blank=True)
    img = models.ImageField(null=True, blank=True)
    video = EmbedVideoField(null=True, blank=True)

class Vidio(models.Model):
    subtitle = models.CharField(max_length=100, null=False, blank=False, unique=True)
    video = EmbedVideoField(null=True, blank=True)

