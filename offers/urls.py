from django.urls import path
from .views import OffersMainView, SearchOffers


urlpatterns = [
    path("", OffersMainView.as_view()),
    path("search/", SearchOffers.as_view())
]
