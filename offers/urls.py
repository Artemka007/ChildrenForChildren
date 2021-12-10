from django.urls import path
from .views import indexx, OffersMainView, FilterOffers


urlpatterns = [
    path("test/offers/", indexx),
    path("", OffersMainView.as_view()),
    path("filter/", FilterOffers.as_view())
    
]
