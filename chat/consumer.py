import json
import datetime

from asgiref.sync import sync_to_async
from channels.generic.websocket import AsyncWebsocketConsumer
from django.contrib.auth import get_user_model
from account.serializers import UserSerializer

from chat.serializer import ChatSerializer, MessageSerializer, CreateMessageSerializer

from .models import Chat, Message
import pdb as _

class ChatConsumer(AsyncWebsocketConsumer):
    @sync_to_async()
    def _send_message(self, message):
        serializer = CreateMessageSerializer(data=message)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return MessageSerializer(serializer.instance).data
    @sync_to_async()
    def _writing_message(self, userId):
        user = get_user_model().objects.get(pk=userId)
        return UserSerializer(user).data
    @sync_to_async()
    def _read_messages(self, chat, user):
        messages = Chat.objects.get(pk=chat).messages.all()
        for i in messages:
            if user:
                i.readers.add(user)
    @sync_to_async()
    def _edit_message(self, message):
        old_message = Message.objects.filter(pk=message['id'])[0]
        if old_message is None:
            self.disconnect(500)
            return
        serializer = CreateMessageSerializer(data=message, instance=old_message)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return CreateMessageSerializer(message).data
    @sync_to_async()
    def _delete_message(self, message):
        id = message.get("id")
        messages = Message.objects.filter(pk=id)
        messages.delete()
        return message

    async def connect(self):
        self.room_name = self.scope["url_route"]["kwargs"]["id"]
        self.group_name = 'chats_' + str(self.room_name)
        
        await self.channel_layer.group_add(
            self.group_name,
            self.channel_name
        )
        await self.accept()

    async def disconnect(self, code):
        await self.channel_layer.group_discard(
            self.group_name,
            self.channel_name
        )
        
    
    async def receive(self, text_data=None, bytes_data=None):
        data = json.loads(text_data)
        user = self.scope.get("user")
        if user is None:
            await self.channel_layer.group_send(self.group_name, {
                "type": "user_not_auth"
            })
        action = data.get("action")
        if action is None:
            await self.channel_layer.group_send(self.group_name, {
                "type": "user_not_auth"
            })
            await self.disconnect(405)

        elif action == "send_message":
            message = data.get("message")
            if message is None:
                self.disconnect(405)
            message = await self._send_message(message)
            await self.channel_layer.group_send(self.group_name, {
                "type": "send_message",
                "action": "send_message",
                "message": message
            })
        elif action == "writing_message":
            u = await self._writing_message(data.get("user"))
            await self.channel_layer.group_send(self.group_name, {
                "type": "writing_message",
                "action": "writing_message",
                "user": u
            })
        elif action == "read_messages":
            await self._read_messages(data.get("chat"), user)
            await self.channel_layer.group_send(self.group_name, {
                "type": "read_messages",
                "action": "read_messages",
                "chat": data.get("chat")
            })
        elif action == "edit_message":
            message = data.get("message")
            if message is None:
                self.disconnect(405)
            message = await self._edit_message(message)
            await self.channel_layer.group_send(self.group_name, {
                "type": "edit_message",
                "action": "edit_message",
                "message": message
            })
        elif action == "delete_message":
            message = data.get("message")
            if message is None:
                self.disconnect(405)
            message = await self._delete_message(message)
            await self.channel_layer.group_send(self.group_name, {
                "type": "delete_message",
                "action": "delete_message",
                "message": message
            })
    

    async def user_not_auth(self, e):
        await self.send(text_data=json.dumps({
            'action': 'user_not_auth',
            'user': self.scope.get("user")
        }))
    async def send_message(self, e):
        await self.send(text_data=json.dumps({
            'action': e['action'],
            'message': e['message']
        }))

    async def writing_message(self, e):
        await self.send(text_data=json.dumps({
            'action': e['action'],
            'user': e['user']
        }))

    async def read_messages(self, e):
        await self.send(text_data=json.dumps({
            'action': e['action'],
            'chat': e['chat']
        }))

    async def edit_message(self, e):
        await self.send(text_data=json.dumps({
            'action': e['action'],
            'message': e['message']
        }))

    async def delete_message(self, e):
        await self.send(text_data=json.dumps({
            'action': e['action'],
            'message': e['message']
        }))