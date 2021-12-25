import datetime

from django.shortcuts import render
from rest_framework import serializers
from rest_framework.generics import GenericAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView, Response

from api.mixins import ProjectAPIView, SearchMixin
from .serializers import CreateOfferMainSerializer, OfferMainSerializer, SubjectSerializer
from .models import OffersMain, Subject

from django.core.exceptions import PermissionDenied

class OffersMainView(ProjectAPIView):
    queryset = OffersMain.objects.all()
    serializer_class = OfferMainSerializer

    def get(self, request):
        if not request.user.is_authenticated:
            raise PermissionDenied("Пользователь не авторизован.")
        request.user.online_date = datetime.datetime.now()
        offers = self.get_queryset()
        serializer = self.get_serializer(offers, many=True)
        return self.get_response(True, "Всё прошло успешно", {"offers": serializer.data})

    def post(self, request):    #create view
        if not request.user.is_authenticated:
            raise PermissionDenied("Пользователь не авторизован.")
        request.user.online_date = datetime.datetime.now()
        serializer = CreateOfferMainSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return self.get_response(True, "Всё прошло успешно", {"offer": self.get_serializer(serializer.instance).data})
        else:
            return self.get_response(False, "Что-то пошло не так", {"errors": serializer.errors})
        
    def put(self, request):
       # get id in query params
        id = request.GET.get("id")
        if not id:
            raise Exception("Параметр id не передан.")
        request.user.online_date = datetime.datetime.now()
        if not request.user.is_authenticated:
            raise Exception("Пользователь не авторизован.")
        id = int(id)
        offer = self.get_queryset().get(pk=id)
        if offer.user.id == request.user.id:
            serializer = CreateOfferMainSerializer(instance=offer, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return self.get_response(True, "Вы успешно обновили предложение.", {"offer": self.get_serializer(serializer.instance).data}) 
            else:
                raise Exception("Что-то пошло не так.")
        else:
            raise PermissionDenied("К сожалению, вы не имеете доступа к этим данным.")
        
        
    def delete(self, request):
        # get id in query params
        id = request.GET.get("id")
        if not id:
            raise PermissionDenied("Параметр id не передан.")
        if not request.user.is_authenticated:
            raise PermissionDenied("Пользователь не авторизован.")
        request.user.online_date = datetime.datetime.now()
        # get offer by id
        offer = self.get_queryset().get(pk=int(id))
        if offer.user.id == request.user.id:
            offer.is_archived = True
            offer.save()
            offers = self.get_queryset().all()
            serializer = self.get_serializer(offers, many=True)
            # return offers for frontend
            return self.get_response(True, "Вы успешно удалили предложение.", {"offers": serializer.data}) 
        else:
            raise PermissionDenied("К сожалению, вы не имеете доступа к этим данным.")

class SearchOffers(ProjectAPIView, SearchMixin):
    queryset = OffersMain.objects.all()
    serializer_class = OfferMainSerializer
    search_fields = ["title", "about", "subject__name", "define_type_of_request"]
    detail_search_fields = ["title", "about", "subject__name", "define_type_of_request"]
    def post(self, request):
        if not request.user.is_authenticated:
            raise PermissionDenied("Пользователь не авторизован.")
        request.user.online_date = datetime.datetime.now()
        q = request.data.get('q')
        offers = self.get_objects(q)
        return Response({'result': True, 'message': 'Всё успешно', 'data': {'offers': self.get_serializer(offers, many=True).data}})
    
class AllSubjectsView(ProjectAPIView):
    queryset = Subject.objects.all()
    def get(self, request):
        if not request.user.is_authenticated:
            raise PermissionDenied("Пользователь не авторизован.")
        request.user.online_date = datetime.datetime.now()
        q = self.get_queryset()
        subjects = SubjectSerializer(q, many=True).data
        return self.get_response(True, "Возвращены все предметы.", {"subjects": subjects})