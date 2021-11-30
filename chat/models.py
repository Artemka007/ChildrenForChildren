from django.db import models
from django.contrib.auth import get_user_model

class Chat(models.Model):
    WHO_CAN_EDIT_CHAT = (
        ("everybody", "Все"),
        ("admins_and_moders", "Админы и модераторы"),
        ("admins", "Админы")
    )

    # general information
    photo = models.ImageField(upload_to="chat/photos", null=True, blank=True)
    title = models.CharField(max_length=128, null=True, blank=True)
    about = models.CharField(max_length=1024, null=True, blank=True)
    who_can_edit_chat = models.CharField(choices=WHO_CAN_EDIT_CHAT, default="everybody", max_length=32)
    
    # many users
    users = models.ManyToManyField(get_user_model(), related_name="chats", default=[], blank=True)
    moderators = models.ManyToManyField(get_user_model(), related_name="moder_in_chats", default=[], blank=True)
    admins = models.ManyToManyField(get_user_model(), related_name="admin_in_chats", default=[], blank=True)
    banned_list = models.ManyToManyField(get_user_model(), related_name="banned_in_chats", default=[], blank=True)

    # any flags
    is_group = models.BooleanField(default=False)
    is_private = models.BooleanField(default=False)

class Message(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name="messages")
    chat = models.ForeignKey(Chat, on_delete=models.CASCADE, related_name="messages")
    body = models.CharField(max_length=512)
    date = models.DateTimeField(auto_now=True)

    readers = models.ManyToManyField(get_user_model(), related_name="read_messages", default=[], blank=True)

    reply_to_message = models.ForeignKey("self", on_delete=models.CASCADE, related_name="reply_message", null=True, blank=True)

    is_forwarded = models.BooleanField(default=False)

    # files
    imgs = models.ManyToManyField("ImgFileUpload", related_name="messages", default=[], blank=True)
    docs = models.ManyToManyField("DocFileUpload", related_name="messages", default=[], blank=True)

    class Meta:
        ordering = ("date",)

class ImgFileUpload(models.Model):
    file = models.FileField(upload_to="chat/message/imgs")
    
    def delete(self, using=None, keep_parents=False):
        self.file.delete(save=True)
        super().delete()


class DocFileUpload(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    file = models.FileField(upload_to="chat/message/docs")
    
    def delete(self, using=None, keep_parents=False):
        self.file.delete(save=True)
        super().delete()