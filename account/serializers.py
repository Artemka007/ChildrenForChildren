from django.contrib.auth import get_user_model

from rest_framework.serializers import ModelSerializer, UniqueTogetherValidator, raise_errors_on_nested_writes

class UserSerializer(ModelSerializer):
    class Meta:
        validators = [
            UniqueTogetherValidator(
                queryset=get_user_model().objects.all(),
                fields=['username', 'email']
            )
        ]
        model = get_user_model()
        fields = [
            "id", 
            "username", 
            "email", 
            "first_name", 
            "last_name", 
            "patronymic", 
            "is_active", 
            "age", 
            "phone", 
            "city", 
            "country", 
            "district", 
            "about_me", 
            "social_networks", 
            "photo", 
            "online_date", 
            "user_in_school_status"
        ]  

