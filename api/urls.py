from django.urls import path, include

from .views import index

urlpatterns = [
    path("docs/", index),
    path("account/", include("account.urls")),
    path("chats/", include("chat.urls")),
    path("offers/", include("offers.urls"))
]