from rest_framework import serializers
from .models import OffersMain

class OfferMainSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = OffersMain
        fields = "__all__"
