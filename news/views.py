import datetime

from django.shortcuts import render
from rest_framework.response import Response
from api.mixins import ProjectAPIView
from .models import New
from .serializers import NewSerializer

class NewsAPIView(ProjectAPIView):
    queryset = New.objects.all()
    serializer_class = NewSerializer
    def get(self, request):
        if not request.user.is_authenticated:
            raise Exception("У вас нет доступа к этой странице.")
        request.user.online_date = datetime.datetime.now()
        return self.get_response(True, "", {"news": self.get_serializer(self.get_queryset(), many=True).data})