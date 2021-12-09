from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError

from rest_framework.serializers import ModelSerializer, UniqueTogetherValidator

class UserSerializer(ModelSerializer):
    class Meta:
        # Each room only has one event per day.
        validators = [
            UniqueTogetherValidator(
                queryset=get_user_model().objects.all(),
                fields=['username', 'email']
            )
        ]
        model = get_user_model()
        fields = ["id", "username", "email", "first_name", "last_name", "patronymic", "is_active", "age", "phone", "city", "country", "district", "status", "about_me"]  

    def update(self, instance, validated_data):
        username = validated_data.get('username', instance.username)
        email = validated_data.get('email', instance.email)
        first_name = validated_data.get('first_name', instance.first_name)
        last_name = validated_data.get('last_name', instance.last_name)
        age = validated_data.get('age', instance.age)
        patronymic = validated_data.get('patronymic', instance.patronymic)
        phone = validated_data.get('phone', instance.phone)
        city = validated_data.get('city', instance.city)
        country = validated_data.get('country', instance.country)
        district = validated_data.get('district', instance.district)
        status = validated_data.get('status', instance.status)
        about_me = validated_data.get('about_me', instance.about_me)
        user_in_school_status = validated_data.get('user_in_school_status', instance.user_in_school_status)
        if username is None or username == "":
            raise ValidationError({"username": "Username is empty."})
        if email is None or email == "":
            raise ValidationError({"email": "Email is empty."})
        if first_name is None or first_name == "":
            raise ValidationError({"first_name": "First name is empty."})
        if last_name is None or last_name == "":
            raise ValidationError({"last_name": "Last name is empty."})
        if age is None or age == "":
            raise ValidationError({"age": "Age is empty."})
        if patronymic is None or patronymic == "":
            raise ValidationError({"patronymic": "patronymic is empty."})
        if phone is None or phone == "":
            raise ValidationError({"phone": "phone is empty."})
        if user_in_school_status is None or user_in_school_status == "":
            raise ValidationError({"user_in_school_status": "user_in_school_status name is empty."})
        instance.username = username
        instance.email = email
        instance.first_name = first_name
        instance.last_name = last_name
        instance.age = age
        instance.patronymic = patronymic
        instance.phone = phone
        instance.city = city
        instance.country = country
        instance.district = district
        instance.status = status
        instance.about_me = about_me
        instance.user_in_school_status = user_in_school_status
        instance.save()
        return instance
