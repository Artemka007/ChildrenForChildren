from django.urls import path
from .views import indexx, OffersMainView



urlpatterns = [
    path("test/offers/", indexx),
    path("", OffersMainView.as_view())
]