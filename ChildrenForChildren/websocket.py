import os

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ChildrenForChildren.settings')
import django

django.setup()

from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from chat.routing import websocket_urlpatterns
from django.core.asgi import get_asgi_application

websocket_application = AuthMiddlewareStack(
    URLRouter(
        websocket_urlpatterns
    )
)
application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    'websocket': websocket_application
})
