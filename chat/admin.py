from django.contrib import admin

from chat.models import Chat, Message, ImgFileUpload, DocFileUpload

admin.site.register(Chat)
admin.site.register(Message)
admin.site.register(ImgFileUpload)
admin.site.register(DocFileUpload)
