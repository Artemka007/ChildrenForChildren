from django.core.checks import messages
from django.http.response import HttpResponse
from django.shortcuts import render
from rest_framework import serializers
from rest_framework.views import APIView, Response
from .serializers import OfferMainSerializer
from .models import OffersMain
import pdb 



def indexx(request):
    AllOfers = OffersMain.objects.all()
    return render(request, "indexx.html", {"AllOfers": AllOfers})


class OffersMainView(APIView):
    def get(self, request):
        id = request.GET.get("id")
        if id is None:
            all_offers = OffersMain.objects.all()
            serializer = OfferMainSerializer(all_offers, many=True)
            return Response({"result": True, "message": "Параметр id не передан", "data":{"offers": serializer.data}})
        offer = OffersMain.objects.get(pk=id)
        serializer = OfferMainSerializer(offer, many=False)
        return Response({"result": True, "message": "Всё прошло успешно", "data":{"offer": serializer.data}})

    def post(self, request):    #create view
        serializer =  OfferMainSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response({"result": True, "message": "Всё прошло успешно", "data":{'offer': OfferMainSerializer(serializer.instance).data}})
        else:
            pdb.set_trace()
            return Response({'result': False, 'message': 'smt went wrong', 'data': {}})
        
    def update(self, request, pk): #Updata
        
        offer = OffersMain.objects.get(id=pk)
        serializer = OfferMainSerializer(instance=offer, data=request.data)
        
        if serializer.is_valid():
            serializer.save()   
        return Response(serializer.data) 

