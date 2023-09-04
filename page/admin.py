from django.contrib import admin
from  embed_video.admin  import  AdminVideoMixin

from page.models import *

class VideosAdmin(AdminVideoMixin, admin.ModelAdmin):
    pass

admin.site.register(Content, VideosAdmin)
admin.site.register(Vidio, VideosAdmin)

