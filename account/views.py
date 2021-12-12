from django.contrib.auth import authenticate, login, get_user_model, logout
from django.db.models import Value as V
from django.db.models.functions import Concat
from django.db.models.query import Q
from rest_auth.serializers import PasswordResetConfirmSerializer
from rest_framework import serializers
from rest_framework.generics import GenericAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView, Response
from rest_auth.serializers import PasswordResetSerializer
from rest_auth.views import sensitive_post_parameters_m

from api.mixins import SearchMixin

from .serializers import UserSerializer
#from .models import Profile

class LoginView(APIView):
    '''
    The view that authenticate and login user or return warning.
    In data you should send params:
    * csrfmiddlewaretoken*: str
    * username: str
    * password: str
    '''
    def post(self, request):
        data = request.data
        username = data.get("username")
        password = data.get("password")
        # if username or password did not send in data return fail message
        if not username or not password:
            return Response({"result": False, "message": "Данные пользователя переданы не полностью.", "data": {}})
        # else try to authenticate a user
        user = authenticate(username=username, password=password)
        # if user authenticated login him
        if user is not None:
            login(request, user)
            return Response({"result": True, "message": "Пользователь успешно авторизован.", "data": {"user": UserSerializer(user).data}}, 200)
        # else return that user does not exists
        else:
            return Response({"result": False, "message": "Пользователя с таким паролем и логином не существует.", "data": {"user": None}}, 200)

class RegisterView(APIView):
    '''
    The view that register new user and send a success message.
    In data you should send params:
    * csrfmiddlewaretoken*: str
    * username*: str
    * email*: str
    * first_name*: str
    * last_name*: str
    * patronymic: str
    * phone*: str
    * age*: str
    * status: str
    * user_in_school_status: str
    * about_me: str
    * city: str
    * country: str
    * district: str
    * password*: str
    * password2*: str
    '''
    def post(self, request):
        try:
            username = request.data["username"]
            email = request.data["email"]
            password = request.data["password2"]
            if request.data.get('password') != password:
                raise Exception("Пароли не совпадают.")
            if get_user_model().objects.filter(username=request.data.get("username")).exists():
                raise Exception("Пользователь с таким именем уже существует.")
            # create a user object
            user = get_user_model().objects.create_user(username=username, email=email, password=password)
            user.is_active = False
            user.save()
            serializer = UserSerializer(data=request.data, instance=user)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response({"result": True, "message": "Пользователь успешно зарегистрирован.", "data": {}}, 201)
        except Exception as e:
            return Response({"result": False, "message": e.__str__(), "data": {}})

class LogoutView(APIView):
    '''
    The view for logout user.
    data:
    * csrfmiddlewaretoken*: str
    '''
    def post(self, request):
        logout(request)
        return Response({"result": True, "message": "Пользователь успешно вышел из аккаунта.", "data": {}}, 200)
        
class AccountView(APIView):
    '''
    The view for get and change user data.
    '''
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
        user = request.user
        data = request.data
        serializer = UserSerializer(user, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({"result": True, "message": "Данные пользователя успешно изменены.", "data": {}})
        else:
            return Response({"result": False, "message": "Какие-то не те данные... Пожалуйста, повторите попытку.", "data": {"errors": serializer.errors}})

class SearchUserView(GenericAPIView, SearchMixin):
    permission_classes = (IsAuthenticated,)
    queryset = get_user_model().objects.all().annotate(full_name=Concat('first_name', V(' '), 'last_name'))
    serializer_class = UserSerializer
    search_fields = ["username", "first_name", "last_name", "full_name", "email"]
    detail_search_fields = ["username", "first_name", "last_name", "city", "country", "district"]

    def post(self, request):
        # get query in request
        q = request.data.get('q')
        try:
            users = self.get_objects(q)
            return Response({"result": True, "message": "Список пользователей возращен.", "data": {"users": users}})
        except Exception as e:
            return Response({"result": False, "message": e.__str__(), "data": {}})

class PasswordResetView(GenericAPIView):
    '''The generic view that reset password'''
    serializer_class = PasswordResetSerializer
    permission_classes = (AllowAny,)

    def post(self, request, *args, **kwargs):
        try:
            if not get_user_model().objects.filter(email=request.data.get('email'))[0]:
                return Response({"result": False, "message": "Пользователь с таким email не существует.", "data": {}})
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response({"result": True, "message": "Вам на почту выслано письмо с ссылкой для сброса пароля."})
        except Exception as e:
            return Response({"result": False, "message": e.__str__(), "data": {}})

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