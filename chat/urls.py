from django.urls import path
from .views import ChatView, UploadFilesForMessageView, UploadChatPhoto

urlpatterns = [
    path("", ChatView.as_view()),
    path("photo/upload/", UploadChatPhoto.as_view()),
    path("messages/upload/", UploadFilesForMessageView.as_view()),
]