from re import I
from django.core.checks import messages
from django.http.response import HttpResponse
from django.shortcuts import render
from rest_framework import serializers
from rest_framework.views import APIView, Response
from .serializers import OfferMainSerializer
from .models import OffersMain
import pdb 

from rest_framework.filters import SearchFilter, OrderingFilter, BaseFilterBackend
from rest_framework.viewsets import ModelViewSet

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
        id = request.GET.get("id")
        if not id:
            return Response({'result': False, 'message': 'Параметр id не передан', 'data': {}})
        if not request.user.is_authenticated:
            return Response({"result": False, "message": "Пользователь не авторизован.", "data": {}})
        offer = OffersMain.objects.get(pk=int(id))
        if offer.user.id == request.user.id:
            try:
                offer.delete()
                return Response({'result': True, 'message': 'Вы удалили пост', 'data': {}}) 
            except Exception as e:
                return Response({'result': False, 'message': e.__str__(), 'data': {}})
        else:
            return Response({'result': False, 'message': 'хватит пытаться взломать нас ты не хакер.', 'data': {}})
        
        


# filter class
class OfferFilters(ModelViewSet):
    # it is very good if you don't want create custom filter
    queryset = OffersMain.objects.all()#get offer from DB
    serializer_class = OfferMainSerializer# serializer_class
    filter_backends = [SearchFilter, OrderingFilter]#filters
    filterset_fields = ['id', 'title']#filters
    search_fields = ['=title', 'about']#filters
    ordering_fields = ['title', 'id']#filters
    ordering = ['id']#filters

class FilterOffers(APIView):
    def post(self, request):
        '''
        Метод принимает q в теле запроса
        и если это строка, то делает поиск
        предложений по ней, а иначе берет 
        данные из объекта и делает поиск по
        этим данным.
        '''
        pass