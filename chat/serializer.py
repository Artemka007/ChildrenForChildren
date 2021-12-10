from rest_framework.serializers import ModelSerializer

from .models import Chat, Message, DocFileUpload, ImgFileUpload
from account.serializer import UserSerializer

class ImgFileUploadSerializer(ModelSerializer):
    class Meta:
        model = ImgFileUpload
        fields = "__all__"

class DocFileUploadSerializer(ModelSerializer):
    class Meta:
        model = DocFileUpload
        fields = "__all__"

class MessageSerializer(ModelSerializer):
    user = UserSerializer(many=False, read_only=True)
    imgs = ImgFileUploadSerializer(many=True, read_only=True)
    docs = DocFileUploadSerializer(many=True, read_only=True)

    class Meta:
        model = Message
        fields = "__all__"

class ChatSerializer(ModelSerializer):
    users = UserSerializer(many=True, read_only=True)
    messages = MessageSerializer(many=True, read_only=True)

    class Meta:
        model = Chat
        fields = "__all__"

class CreateChatSerializer(ModelSerializer):
    class Meta:
        model = Chat
        fields = ["photo", "title", "about", "who_can_edit_chat", "users", "moderators", "admins", "is_group", "is_private"]

class EditChatSerializer(ModelSerializer):
    users = UserSerializer(many=True, read_only=True)

    class Meta:
        model = Chat
        fields = ["photo", "title", "about", "users", "moderators", "is_private"]

class CreateMessageSerializer(ModelSerializer):
    class Meta:
        model = Message
        fields = ["user", "chat", "body", "reply_to_message", "is_forwarded", "imgs", "docs"]
    
    def create(self, validate_data):
        message = super().create(validate_data)
        message.chat.last_action = message.date
        message.chat.save()
        return message