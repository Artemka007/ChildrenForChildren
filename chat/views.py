import datetime

from django.shortcuts import render

from rest_framework.views import APIView, Response
from django.db.models import Count

from .models import *
from .serializer import *

from api.mixins import ProjectAPIView

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
            user_is_in_chat = chat.users.filter(pk=request.user.pk).exists()
            if not user_is_in_chat and (chat.is_private or not chat.is_group):
                return Response({"result": False, "message": "Пользователя нет в этом чате.", "data": {}})
            return Response({"result": True, "message": "Чат успешно возращен.", "data": {"chat": ChatSerializer(chat).data}})
        # else reurn all chats where the user be
        chats = Chat.objects.filter(users__in=[request.user]).order_by("-last_action").all()
        return Response({"result": True, "message": "Чаты успешно возращены.", "data": {"chats": ChatSerializer(chats, many=True).data}})
    def post(self, request):
        if not request.user.is_authenticated:
            return Response({"result": False, "message": "Пользователь не авторизован.", "data": {}})
        ig_group = request.data.get("is_group")
        if ig_group:
            serializer = CreateChatSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                chat = serializer.instance
            else:
                return Response({"result": False, "message": "Каких-то данных не хватило...", "data": {"errors": serializer.errors}})
        else:
            users = request.data.get("users")
            if not users:
                return Response({"result": False, "message": "Параметр users не передан.", "data": {}})
            chats = Chat.objects.filter(users__in=users).annotate(users_count=Count('users')).filter(users_count=2)
            if chats.exists():
                chat = chats[0]
            else:
                chat = Chat.objects.create()
                chat.users.add(get_user_model().objects.get(pk=users[0]))
                chat.users.add(get_user_model().objects.get(pk=users[1]))
        chats = Chat.objects.all()
        serializer = ChatSerializer(chats, many=True)
        return Response({"result": True, "message": "Все прошло успешно.", "data": {"chat": chat.id, "chats": serializer.data}})
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
class UploadChatPhoto(ProjectAPIView):
    serializer_class = ChatSerializer
    def post(self, request):
        chat_id = request.GET.get("id")
        if not chat_id:
            raise Exception("Не передан chat_id.")
        chat = Chat.objects.get(pk=chat_id)
        files = request.FILES
        photo = files.get("photo")
        if photo:
            chat.photo = photo
            chat.save()
            return self.get_response(True, "Аватарка успешна установлена.", {"chat": self.get_serializer(chat).data})
        else:
            return self.get_response(False, "Что-то пошло не так...")

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