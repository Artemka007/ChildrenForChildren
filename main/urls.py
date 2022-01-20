from django.urls import path
from django.urls.conf import include
from offers.views import *

from .views import *

urlpatterns = [
    path("", check_is_auth_index),
    path("news", check_is_auth_index),
    path("home", check_is_auth_index),
    path("chats", check_is_auth_index),
    path("chats/<int:id>", check_is_auth_index),
    path("users", check_is_auth_index),
    path("login", check_user_is_not_auth_index),
    path("logout", logout_user_index),
    path("offers", check_is_auth_index),
    path("profile", check_is_auth_index),
    path("register", check_user_is_not_auth_index),
    path("reset-password", check_user_is_not_auth_index),
    path("reset-password/confirm/<str:uidb64>/<str:token>", index_for_reset_password, name="password_reset_confirm"),
]
