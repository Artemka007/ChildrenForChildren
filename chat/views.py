from django.shortcuts import render

from rest_framework.views import APIView, Response

from .models import *
from .serializer import *

class ChatView(APIView):
    def get(self, request):
        if not request.user.is_authenticated:
            return Response({"result": False, "message": "Пользователь не авторизован.", "data": {}})
        id = request.GET.get("id")
        # if id sended in request return chat by this id
        if id:
            try:
                chat = Chat.objects.get(pk=id)
            except:
                return Response({"result": False, "message": "Чата с таким id не существует.", "data": {}})
            user_is_in_chat = chat.users.filter(pk=request.user).exists()
            if not user_is_in_chat and (chat.is_private or not chat.is_group):
                return Response({"result": False, "message": "Пользователя нет в этом чате.", "data": {}})
            return Response({"result": True, "message": "Чат успешно возращен.", "data": {"chat": ChatSerializer(chat).data}})
        # else reurn all chats where the user be
        chats = Chat.objects.filter(users__in=[request.user])
        return Response({"result": True, "message": "Чаты успешно возращены.", "data": {"chats": ChatSerializer(chats, many=True).data}})
    def post(self, request):
        if not request.user.is_authenticated:
            return Response({"result": False, "message": "Пользователь не авторизован.", "data": {}})
        users = request.data.get("users")
        if not users:
            return Response({"result": False, "message": "Параметр users не передан.", "data": {}})
        chat = Chat.objects.get_or_create(users__pk=[users])
        return Response({"result": True, "message": "Все прошло успешно.", "data": {"chat": ChatSerializer(chat).data}})
    def put(self, request):
        if not request.user.is_authenticated:
            return Response({"result": False, "message": "Пользователь не авторизован.", "data": {}})
        # get chat id
        id = request.GET.get("id")
        action = request.GET.get("action")
        if id:
            chat = Chat.objects.get(pk=int(id))
            if action == "remove_user":
                chat.users.remove(request.user)
                chat.moderators.remove(request.user)
                return Response({"result": True, "message": "Чат успешно возращен.", "data": {"chat": ChatSerializer(chat).data}})
            elif action == "ban_user":
                # get user by id in request
                userId = request.GET.get("userId")
                user = get_user_model().objects.get(pk=userId)
                # try to get user in banned users list
                try:
                    chat.banned_list.get(pk=userId)
                    chat.banned_list.remove(user)
                # if user does not exists add user in that list
                except:
                    chat.banned_list.add(user)
                return Response({"result": True, "message": "Чат успешно возращен.", "data": {"chat": ChatSerializer(chat).data}})
            try:
                serizlizer = EditChatSerializer(data=request.data, instance=Chat.objects.get(pk=int(id)))
            except Exception as e:
                return Response({"result": False, "message": e.__str__(), "data": {}})
            if serizlizer.is_valid():
                serizlizer.save()
                return Response({"result": True, "message": "Чат успешно возращен.", "data": {"chat": ChatSerializer(serizlizer.instance).data}})
            else:
                return Response({"result": False, "message": "Данные в запросе некорректны.", "data": {}})
        return Response({"result": False, "message": "Параметр id не передан", "data": {}})

class UploadFilesForMessageView(APIView):
    def post(self, request):
        # type is 'img' or 'doc'
        type = request.GET.get("type")
        if not request.user.is_authenticated:
            return Response({"result": False, "message": "Пользователь не авторизован.", "data": {}})
        if type == 'img':
            serializer = ImgFileUploadSerializer(data=request.FILES)
        elif type == 'doc':
            serializer = DocFileUploadSerializer(data=request.FILES)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        serializer.instance.name = request.FILES.get("file").name
        serializer.instance.save()
        return Response({"message": "Файл успешно загружен.", "result": True, "data": {"id": serializer.instance.id}})
    def delete(self, request):
        if not request.user.is_authenticated:
            return Response({"result": False, "message": "Пользователь не авторизован.", "data": {}})
        id = request.GET.get("id")
        type = request.GET.get("type")
        try:
            if type == 'img':
                ImgFileUpload.objects.get(pk=id).delete()
            elif type == 'doc':
                DocFileUpload.objects.get(pk=id).delete()
            return Response({"message": "Файл успешно удален.", "result": True, "data": {}})
        except:
            return Response({"result": False, "message": "Файл с таким id не существует.", "data": {}})
