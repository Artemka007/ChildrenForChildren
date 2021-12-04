from django.urls import path
from django.urls.conf import include
from .views import index, index_for_reset_password
from offers.views import *


urlpatterns = [
    path("", index),
    path("home", index),
    path("chats", index),
    path("users", index),
    path("login", index),
    path("logout", index),
    path("offers", index),
    path("profile", index),
    path("register", index),
    path("reset-password", index),
    path("reset-password/confirm/<str:uidb64>/<str:token>", index_for_reset_password, name="password_reset_confirm"),
    path("test/offers/", include("offers.urls")),
]