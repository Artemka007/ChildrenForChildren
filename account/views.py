from django.contrib.auth import authenticate, login, get_user_model, logout
from rest_auth.app_settings import PasswordResetConfirmSerializer
from rest_framework.generics import GenericAPIView
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView, Response
from rest_auth.serializers import PasswordResetSerializer
from rest_auth.views import sensitive_post_parameters_m

from .serializer import UserSerializer
from .models import Profile

class LoginView(APIView):
    def post(self, request):
        data = request.data
        if "username" not in data or "password" not in data:
            return Response({"result": True, "message": "Данные пользователя переданы не полностью.", "data": {}})
        username = data.get("username")
        password = data.get("password")
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return Response({"result": True, "message": "Пользователь успешно авторизован.", "data": {"user": UserSerializer(user).data}}, 200)
        else:
            return Response({"result": False, "message": "Пользователя с таким паролем и логином не существует.", "data": {"user": None}}, 200)

class RegisterView(APIView):
    def post(self, request):
        try:
            [username, email, first_name, last_name, phone, age, patronymic, password] = self._get_user_data(request=request)
            user = get_user_model().objects.create_user(username, email, password)
            user.first_name = first_name
            user.last_name = last_name
            user.save()
            profile = Profile.objects.create(user=user, phone=phone, age=age, patronymic=patronymic)
            profile.save()
            return Response({"result": True, "message": "Пользователь успешно зарегистрирован.", "data": {}}, 210)
        except Exception as e:
            return Response({"result": False, "message": e.__str__(), "data": {}}, 400)
    
    def _get_user_data(self, request):
            data = request.data
            username = data.get("username")
            email = data.get("email")
            first_name = data.get("first_name")
            last_name = data.get("last_name")
            profile = data.get("profile")
            if profile is None:
                raise Exception("Профиль не передан.")
            phone = profile.get("phone")
            age = profile.get("age")
            patronymic = profile.get("patronymic")
            password = data.get("password")
            password2 = data.get("password2")
            data = [username, email, first_name, last_name, phone, age, patronymic, password2]
            for i in data:
                if i is None:
                    raise Exception("Данные пользователя переданы не полностью.")
            if (password != password2):
                raise Exception("Пароли не совпадают.")
            return data

class LogoutView(APIView):
    def post(self, request):
        logout(request)
        return Response({"result": True, "message": "Пользователь успешно вышел из аккаунта.", "data": {}}, 200)
        
class AccountView(APIView):
    def get(self, request):
        id = request.GET.get("id")
        user = request.user
        if not user.is_authenticated:
            return Response({"result": False, "message": "Пользователь не авторизован.", "data": {"user": None}})
        if id:
            try:
                user = get_user_model().objects.get(pk=id)
            except Exception as e:
                return Response({"result": False, "message": "Пользователь с таким id не найден.", "data": {"user": None}})
        return Response({"result": True, "message": "Данные пользователя отправлены в ответе.", "data": {"user": UserSerializer(user).data}}, 200)
    def put(self, request):
        instance = request.user
        data = request.data
        serializer = UserSerializer(data=data, instance=instance)
        if serializer.is_valid():
            serializer.update(instance, data)
            return Response({"result": True, "message": "Данные пользователя успешно изменены.", "data": {}})
        else:
            return Response({"result": False, "message": "Какие-то не те данные... Пожалуйста, повторите попытку.", "data": {"errors": serializer.errors}})

class PasswordResetView(GenericAPIView):
    serializer_class = PasswordResetSerializer
    permission_classes = (AllowAny,)

    def post(self, request, *args, **kwargs):
        try:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)

            serializer.save()
            return Response({"result": True, "message": "Вам на почту выслано письмо с ссылкой для сброса пароля."})
        except Exception as e:
            return Response({"result": False, "message": e.__str__()})

class PasswordResetConfirmView(GenericAPIView):
    serializer_class = PasswordResetConfirmSerializer
    permission_classes = (AllowAny,)

    @sensitive_post_parameters_m
    def dispatch(self, *args, **kwargs):
        return super(PasswordResetConfirmView, self).dispatch(*args, **kwargs)

    def post(self, request, *args, **kwargs):
        try:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response({"result": True, "message": "Смена пароля прошла успешно."})
        except Exception as e:
            return Response({"result": False, "message": e.__str__()})