import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ChildrenForChildren.settings')
import django
django.setup()

from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter

from chat.routing import websocket_urlpatterns
from django.core.asgi import get_asgi_application


application = ProtocolTypeRouter({
    "https": get_asgi_application(),
    'websocket': AuthMiddlewareStack(
        URLRouter(
            websocket_urlpatterns
        )
    )
})