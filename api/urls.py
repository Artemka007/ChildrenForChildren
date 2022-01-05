from django.urls import path, include

from .views import HelpView, index

urlpatterns = [
    path("help/", HelpView.as_view()),
    path("docs/", index),
    path("account/", include("account.urls")),
    path("chats/", include("chat.urls")),
    path("offers/", include("offers.urls")),
    path("news/", include("news.urls")),
]