from django.urls import path
from .views import AllSubjectsView, OffersMainView, SearchOffers


urlpatterns = [
    path("", OffersMainView.as_view()),
    path("search/", SearchOffers.as_view()),
    path("subjects/", AllSubjectsView.as_view()),
]
