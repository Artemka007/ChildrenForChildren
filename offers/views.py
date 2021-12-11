from django.shortcuts import render
from rest_framework import serializers
from rest_framework.generics import GenericAPIView
from rest_framework.views import APIView, Response

from api.mixins import SearchMixin
from .serializers import OfferMainSerializer
from .models import OffersMain

class OffersMainView(APIView):
    def get(self, request):
        if not request.user.is_authenticated:
            return Response({"result": False, "message": "Пользователь не авторизован.", "data": {}})
        id = request.GET.get("id")
        if id is None:
            all_offers = OffersMain.objects.all()
            serializer = OfferMainSerializer(all_offers, many=True)
            return Response({"result": True, "message": "Всё прошло успешно", "data":{"offers": serializer.data}})
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
                return Response({'result': True, 'message': 'Вы успешно обновили предложение.', 'data': {'offer': OfferMainSerializer(serializer.instance).data}})  
            else:
                return Response({'result': False, 'message': 'smt went wrong', 'data': {}})

        else:
            return Response({'result': False, 'message': 'хватит пытаться взломать нас ты не хакер.', 'data': {}})
        
        
    def delete(self, request):
        # get id in query params
        id = request.GET.get("id")
        if not id:
            return Response({'result': False, 'message': 'Параметр id не передан', 'data': {}})
        if not request.user.is_authenticated:
            return Response({"result": False, "message": "Пользователь не авторизован.", "data": {}})
        # get offer by id
        offer = OffersMain.objects.get(pk=int(id))
        if offer.user.id == request.user.id:
            try:
                offer.delete()
                offers = OffersMain.objects.all()
                serializer = OfferMainSerializer(offers, many=True)
                # return offers for frontend
                return Response({'result': True, 'message': 'Вы удалили пост', 'data': {'offers': serializer.data}}) 
            except Exception as e:
                return Response({'result': False, 'message': e.__str__(), 'data': {}})
        else:
            return Response({'result': False, 'message': 'хватит пытаться взломать нас ты не хакер.', 'data': {}})

class SearchOffers(GenericAPIView, SearchMixin):
    queryset = OffersMain.objects.all()
    serializer_class = OfferMainSerializer
    search_fields = ["title", "about", "define_type_of_subject"]
    detail_search_fields = ["title", "about", "define_type_of_subject"]
    def post(self, request):
        q = request.data.get('q')
        offers = self.get_objects(q)
        return Response({'result': True, 'message': 'Всё успешно', 'data': {'offers': offers}})