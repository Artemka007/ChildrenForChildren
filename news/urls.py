from django.urls import path
from .views import NewsAPIView

urlpatterns = [
    path("", NewsAPIView.as_view())
]