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
        fields = ["id", "username", "email", "first_name", "last_name", "patronymic", "is_active", "age", "phone", "city", "country", "district", "about_me", "photo", "online_date", "user_in_school_status"]  

    def update(self, instance, validated_data):
        raise_errors_on_nested_writes('create', self, validated_data)

        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.age = validated_data.get('age', instance.age)
        instance.patronymic = validated_data.get('patronymic', instance.patronymic)
        instance.phone = validated_data.get('phone', instance.phone)
        instance.city = validated_data.get('city', instance.city)
        instance.country = validated_data.get('country', instance.country)
        instance.district = validated_data.get('district', instance.district)
        instance.about_me = validated_data.get('about_me', instance.about_me)
        instance.photo = validated_data.get('photo', instance.photo)
        instance.user_in_school_status = validated_data.get('user_in_school_status', instance.user_in_school_status)

        instance.save()
    
        return instance
