from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError

from rest_framework.serializers import ModelSerializer, UniqueTogetherValidator

from account.models import Profile

class ProfileSerializer(ModelSerializer):
    class Meta:
        model = Profile
        fields = "__all__"
        validators = [
            UniqueTogetherValidator(
                queryset=get_user_model().objects.all(),
                fields=['phone']
            )
        ]

class UserSerializer(ModelSerializer):
    profile = ProfileSerializer(read_only=True, many=False)

    class Meta:
        # Each room only has one event per day.
        validators = [
            UniqueTogetherValidator(
                queryset=get_user_model().objects.all(),
                fields=['username', 'email']
            )
        ]
        model = get_user_model()
        fields = ["id", "username", "email", "first_name", "last_name", "profile"]  

    def update(self, instance, validated_data):
        username = validated_data.get('username', instance.username)
        email = validated_data.get('email', instance.email)
        first_name = validated_data.get('first_name', instance.first_name)
        last_name = validated_data.get('last_name', instance.last_name)
        if username is None or username == "":
            raise ValidationError({"username": "Username is empty."})
        if email is None or email == "":
            raise ValidationError({"email": "Email is empty."})
        if first_name is None or first_name == "":
            raise ValidationError({"first_name": "First name is empty."})
        if last_name is None or last_name == "":
            raise ValidationError({"last_name": "Last name is empty."})
        instance.save()
        profile = validated_data.pop("profile", None)
        if profile is not None:
            instance.profile.age = profile.get('age', instance.profile.age)
            instance.profile.patronymic = profile.get('patronymic', instance.profile.patronymic)
            instance.profile.phone = profile.get('phone', instance.profile.phone)
            instance.profile.city = profile.get('city', instance.profile.city)
            instance.profile.country = profile.get('country', instance.profile.country)
            instance.profile.district = profile.get('district', instance.profile.district)
            instance.profile.status = profile.get('status', instance.profile.status)
            instance.profile.about_me = profile.get('about_me', instance.profile.about_me)
            instance.profile.save()
        return instance
