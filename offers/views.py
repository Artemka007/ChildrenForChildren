from re import I
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
        if not request.user.is_authenticated:
            return Response({"result": False, "message": "Пользователь не авторизован.", "data": {}})
        id = request.GET.get("id")
        if id is None:
            all_offers = OffersMain.objects.all()
            serializer = OfferMainSerializer(all_offers, many=True)
            return Response({"result": True, "message": "Параметр id не передан", "data":{"offers": serializer.data}})
        offer = OffersMain.objects.get(pk=id)
        serializer = OfferMainSerializer(offer, many=False)
        return Response({"result": True, "message": "Всё прошло успешно", "data":{"offer": serializer.data}})

    def post(self, request):    #create view
        if not request.user.is_authenticated:
            return Response({"result": False, "message": "Пользователь не авторизован.", "data": {}})
        serializer =  OfferMainSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response({"result": True, "message": "Всё прошло успешно", "data":{'offer': OfferMainSerializer(serializer.instance).data}})
        else:
            return Response({'result': False, 'message': 'smt went wrong', 'data': {}})
        
    def put(self, request): #Updata
        
       # get id in query params

        id = request.GET.get("id")
        if not id:
            return Response({'result': False, 'message': 'Параметр id не передан', 'data': {}})  
        if not request.user.is_authenticated:
            return Response({"result": False, "message": "Пользователь не авторизован.", "data": {}})
        offer = OffersMain.objects.get(pk=int(id))
        if offer.user.id == request.user.id:
            serializer = OfferMainSerializer(instance=offer, data=request.data)
            if serializer.is_valid():
                serializer.save()   
                return Response({'result': True, 'message': 'Вы обновили дату', 'data': {'offer': OfferMainSerializer(serializer.instance).data}})  
            else:
                return Response({'result': False, 'message': 'smt went wrong', 'data': {}})

        else:
            return Response({'result': False, 'message': 'хватит пытаться взломать нас ты не хакер.', 'data': {}})
        
        
    def delete(self, request, pk):
        id = request.GET.get("id")
        if not id:
            return Response({'result': False, 'message': 'Параметр id не передан', 'data': {}})  
        
        if not request.user.is_authenticated:
            return Response({"result": False, "message": "Пользователь не авторизован.", "data": {}})
        
        
        offer = OffersMain.objects.get(pk=int(id))
        if offer.user.id == request.user.id:
            serializer = OfferMainSerializer(instance=offer, data=request.data)
            if serializer.is_valid():
                serializer.delete()
                return Response({'result': True, 'message': 'Вы удалили пост', 'data': {}}) 
            else:
                return Response({'result': False, 'message': 'smt went wrong', 'data': {}})

        else:
            return Response({'result': False, 'message': 'хватит пытаться взломать нас ты не хакер.', 'data': {}})
        
        
        
        
        