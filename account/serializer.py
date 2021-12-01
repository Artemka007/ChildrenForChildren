from django.contrib.auth import get_user_model

from rest_framework.serializers import ModelSerializer

from account.models import Profile

class ProfileSerializer(ModelSerializer):
    class Meta:
        model = Profile
        fields = "__all__"

class UserSerializer(ModelSerializer):
    profile = ProfileSerializer(read_only=True, many=False)

    class Meta:
        model = get_user_model()
        fields = ["id", "username", "email", "first_name", "last_name", "profile"]  

    def update(self, instance, validated_data):
        instance.username = validated_data['username']
        instance.email = validated_data['email']
        instance.first_name = validated_data['first_name']
        instance.last_name = validated_data['last_name']

        instance.save()

        profile = validated_data.pop("profile", None)
        if profile is not None:
            instance.profile.age = profile['age']
            instance.profile.patronymic = profile['patronymic']
            instance.profile.phone = profile['phone']
            instance.profile.city = profile['city']
            instance.profile.country = profile['country']
            instance.profile.district = profile['district']
            instance.profile.status = profile['status']
            instance.profile.user_in_school_status = profile['user_in_school_status']
            instance.profile.about_me = profile['about_me']
            instance.profile.save()

        return super().update(instance,validated_data)
