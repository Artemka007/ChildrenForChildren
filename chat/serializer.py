from django.db.models import fields
from rest_framework.serializers import ModelSerializer

from .models import Chat, Message
from account.serializer import UserSerializer

class MessageSerializer(ModelSerializer):
    user = UserSerializer(many=False, read_only=True)

    class Meta:
        model = Message
        fields = "__all__"

class ChatSerializer(ModelSerializer):
    users = UserSerializer(many=True, read_only=True)
    moderators = UserSerializer(many=True, read_only=True)
    admins = UserSerializer(many=True, read_only=True)
    messages = MessageSerializer(many=True, read_only=True)

    class Meta:
        model = Chat
        fields = "__all__"

class CreateChatSerializer(ModelSerializer):
    class Meta:
        model = Chat
        fields = ["photo", "title", "about", "who_can_edit_chat", "users", "moderators", "admins", "is_group", "is_private"]

class CreateMessageSerializer(ModelSerializer):
    class Meta:
        model = Message
        fields = ["user", "chat", "body", "reply_to_message", "is_forwarded"]