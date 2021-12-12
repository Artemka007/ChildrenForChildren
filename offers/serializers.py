from rest_framework import serializers
from .models import OffersMain, Subject

class SubjectSerializer(serializers.ModelSerializer):   
    class Meta:
        model = Subject
        fields = "__all__"

class OfferMainSerializer(serializers.ModelSerializer):
    subject = SubjectSerializer(many=False, read_only=True)

    class Meta:
        model = OffersMain
        fields = "__all__"

class CreateOfferMainSerializer(serializers.ModelSerializer):
    class Meta:
        model = OffersMain
        fields = "__all__"