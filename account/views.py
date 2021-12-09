from django.contrib.auth import authenticate, login, get_user_model, logout
from django.db.models import Value as V
from django.db.models.functions import Concat
from django.db.models.query import Q
from rest_auth.serializers import PasswordResetConfirmSerializer
from rest_framework.generics import GenericAPIView
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView, Response
from rest_auth.serializers import PasswordResetSerializer
from rest_auth.views import sensitive_post_parameters_m

from .serializer import UserSerializer
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
            # get data for register
            [
                username, 
                email, 
                first_name, 
                last_name,
                patronymic,
                phone, 
                age, 
                status, 
                user_in_school_status, 
                about_me, 
                city, 
                country, 
                district,
                password
            ] = self._get_user_data(request=request)
            if get_user_model().objects.filter(username=username).exists():
                return Response({"result": False, "message": "Пользователь с таким именем уже существует.", "data": {}})
            # create a user object
            user = get_user_model().objects.create_user(username, email, password)
            # set the user first and last name
            user.first_name = first_name
            user.last_name = last_name
            # create profile object with foreign key to user
            user.phone=phone
            user.age=age
            user.status=status
            user.user_in_school_status=user_in_school_status
            user.about_me=about_me
            user.city=city
            user.country=country
            user.district=district
            user.patronymic=patronymic
            # save profile object
            user.save()
            return Response({"result": True, "message": "Пользователь успешно зарегистрирован.", "data": {}}, 201)
        except Exception as e:
            return Response({"result": False, "message": e.__str__(), "data": {}})
    
    def _get_user_data(self, request):
            '''
            Function that get user data in request and return
            it in array.
            '''
            data = request.data
            username = data.get("username")
            email = data.get("email")
            first_name = data.get("first_name")
            last_name = data.get("last_name")
            phone = data.get("phone")
            age = data.get("age")
            patronymic = data.get("patronymic")
            user_in_school_status = data.get("user_in_school_status")
            status = data.get("status")
            about_me = data.get("about_me")
            city = data.get("city")
            country = data.get("country")
            district = data.get("district")
            password = data.get("password")
            password2 = data.get("password2")
            data = [username, email, first_name, last_name, patronymic, phone, age, status, user_in_school_status, about_me, city, country, district, password2]
            for i in data:
                if i is None:
                    raise Exception("Данные пользователя переданы не полностью.")
            if (password != password2):
                raise Exception("Пароли не совпадают.")
            return data

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

class SearchUserView(APIView):
    def post(self, request):
        # get query in request
        q = request.data.get('q')
        try:
            users = self._search_users(q)
            return Response({"result": True, "message": "Список пользователей возращен.", "data": {"users": users}})
        except Exception as e:
            return Response({"result": False, "message": e.__str__(), "data": {}})
    def _search_users(self, q):
        '''
        The function that search users by the query.
        ---
        In q you can pass query string or object
        with user params:
        * username 
        * first_name 
        * last_name 
        * city 
        * country 
        * district
        ---
        return <UserSerializer many=True/>
        '''
        if q is None:
            return UserSerializer(get_user_model().objects.all(), many=True).data
        if isinstance(q, str):
            users = get_user_model().objects.annotate(full_name=Concat('first_name', V(' '), 'last_name')).filter(Q(full_name__contains=q) | Q(first_name__contains=q) | Q(last_name__contains=q) | Q(username__contains=q))
        else:
            username = q.get("username")
            first_name = q.get("first_name")
            last_name = q.get("last_name")
            city = q.get("city")
            country = q.get("country")
            district = q.get("district")
            users = get_user_model().objects.all()
            if username:
                users = users.filter(username__contains=username)
            if first_name:
                users = users.filter(first_name__contains=first_name)
            if last_name:
                users = users.filter(last_name__contains=last_name)
            if country:
                users = users.filter(country__contains=country)
            if city:
                users = users.filter(city__contains=city)
            if district:
                users = users.filter(district__contains=district)
        return UserSerializer(users, many=True).data

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