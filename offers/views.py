from django.core.checks import messages
from django.http.response import HttpResponse
from django.shortcuts import render
from rest_framework import serializers
from rest_framework.views import APIView, Response
from .serializers import OfferMainSerializer

# relative import of forms
from .models import OffersMain


def indexx(request):
    AllOfers = OffersMain.objects.all()
    return render(request, "indexx.html", {"AllOfers": AllOfers})


class OffersMainView(APIView):
    def get(self, request):
        id = request.GET.get("id")
        if id is None:
            all_offers = OffersMain.objects.all()
            serializer = OfferMainSerializer(all_offers, many=True)
            return Response({"result": True, "message": "Параметр id не передан", "data":{"all_offers": serializer.data}})
        offer = OffersMain.objects.get(pk=id)
        serializer = OfferMainSerializer(offer, many=False)
        return Response({"result": True, "message": "Всё прошло успешно", "data":{"offer": serializer.data}})
