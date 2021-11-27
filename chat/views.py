from django.shortcuts import render

from rest_framework.views import APIView, Response

from .models import *
from .serializer import *

class ChatView(APIView):
    def get(self, request):
        if not request.user.is_authenticated:
            return Response({"result": False, "message": "Пользователь не авторизован.", "data": {}})
        id = request.GET.get("id")
        if id:
            try:
                chat = Chat.objects.get(pk=id)
            except:
                return Response({"result": False, "message": "Чата с таким id не существует.", "data": {}})
            user_is_in_chat = chat.users.filter(pk=request.user).exists()
            if not user_is_in_chat and (chat.is_private or not chat.is_group):
                return Response({"result": False, "message": "Пользователя нет в этом чате.", "data": {}})
            return Response({"result": True, "message": "Чат успешно возращен.", "data": {"chat": ChatSerializer(chat).data}})
        chats = Chat.objects.filter(users__in=[request.user])
        return Response({"result": True, "message": "Чатs успешно возращенs.", "data": {"chats": ChatSerializer(chats, many=True).data}})
