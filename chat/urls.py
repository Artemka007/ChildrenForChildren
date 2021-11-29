from django.urls import path
from .views import ChatView, UploadFilesForMessageView

urlpatterns = [
    path("", ChatView.as_view()),
    path("messages/upload/", UploadFilesForMessageView.as_view()),
]