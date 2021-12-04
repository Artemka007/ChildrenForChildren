from django.urls import path
from .views import *

urlpatterns = [
    path("", indexx),
    path("edit/", create_view)
]