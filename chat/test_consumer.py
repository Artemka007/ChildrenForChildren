import pytest
import json
from channels.testing import WebsocketCommunicator
from asgiref.sync import sync_to_async
from ChildrenForChildren.websocket import application
from django.contrib.auth import get_user_model
from .models import Message
from .serializer import ChatSerializer, CreateChatSerializer, MessageSerializer
from django.test import Client

class ChatConsumerTestHelper:
    def __init__(self) -> None:
        self.client = Client()
        self.communicator = WebsocketCommunicator(application, "/chat/1/")

        self.user = None
        self.chat = None
        self.message = None

    @sync_to_async
    def login(self):
        user = get_user_model().objects.create_user("test", "test@mail.com", "test")
        self.client.login(username="test", password="test")
        self.user = user

    @sync_to_async
    def get_chat_and_message(self):
        serializer = CreateChatSerializer(data={"photo": None, "title": "Test1", "about": "About tes 1", "who_can_edit_chat": "everybody", "users": []})
        if serializer.is_valid():
            serializer.save()
            message = Message.objects.create(chat=serializer.instance, user=self.user, body="Test message.")
            message.save()
            self.chat = ChatSerializer(serializer.instance).data
            self.message = MessageSerializer(message).data
            return (ChatSerializer(serializer.instance).data, MessageSerializer(message).data)
        else: raise Exception(serializer.errors)

@pytest.mark.django_db(transaction=True)
@pytest.mark.asyncio
async def test_chat_consumer_send_message():
    helper = ChatConsumerTestHelper()
    await helper.login()
    data = {}
    chat, _ = await helper.get_chat_and_message()
    data["action"] = "send_message"
    data["message"] = {"user": helper.user.id, "chat": helper.chat["id"], "body": "Test message 1"}
    communicator = helper.communicator
    connected, subprotocol = await communicator.connect()
    assert connected
    await communicator.send_to(text_data=json.dumps(data))
    response = await communicator.receive_json_from()
    await communicator.disconnect()
    assert response.get('message') is not None, "Message in response is None"
    assert response.get('message').get("id") is not None, "Message id in response is None"
    assert response.get('message').get("id") == _["id"] + 1, "Message id in response is not 1"

@pytest.mark.django_db(transaction=True)
@pytest.mark.asyncio
async def test_chat_consumer_writing_message():
    helper = ChatConsumerTestHelper()
    await helper.login()
    data = {}
    data["action"] = "writing_message"
    data["user"] = helper.user.id
    communicator = helper.communicator
    connected, subprotocol = await communicator.connect()
    assert connected
    await communicator.send_to(text_data=json.dumps(data))
    response = await communicator.receive_json_from()
    await communicator.disconnect()
    assert response.get('user') is not None, "User in response is None"
    assert response.get('user').get("id") is not None, "User id in response is None"
