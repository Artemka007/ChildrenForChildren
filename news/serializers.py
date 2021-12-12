from rest_framework import serializers
from .models import New
from account.serializers import UserSerializer

class NewSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)
    class Meta:
        model = New
        fields = "__all__"