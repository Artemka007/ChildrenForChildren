from django.urls import path

from .consumer import ChatConsumer

websocket_urlpatterns = [
    path("chat/<int:id>/", ChatConsumer.as_asgi())
]
