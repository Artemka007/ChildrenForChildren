from django.contrib.auth import get_user_model
from django.http.request import QueryDict
from django.test import TestCase
import pdb as _
from rest_framework.test import APIClient

from account.models import CustomUser

class TestAccountView(TestCase):
    def setUp(self):
        self.test_user = {
            "username": "vanvanych",
            "email": "vanvanych@email.com",
            "first_name": "Ivan",
            "last_name": "Ivanov",
            "patronymic": "Ivanovich",
            "phone": "+79999999999",
            "status": "Test status",
            "user_in_school_status": "student",
            "country": "Russia",
            "city": "Ivanovo",
            "district": "Ivanovskaya street",
            "about_me": "I am Ivan Ivanych Ivanov.",
            "password": "123",
            "password2": "123"
        }
        self.user_for_update = self.test_user
        self.user_for_update["username"] = "TestUpdate"
        self.req_client = APIClient()

    def test_login_view(self):
        data, user = self._login()
        self.assertEqual(data.get("result"), True, data.get("message"))
        self.assertTrue(data.get("data") is not None)
        self.assertTrue(data.get("data").get("user") is not None)
        self.assertEquals(data.get("data").get("user").get("id"), user.id)

    def test_register_view(self):
        u = self.test_user
        response = self.req_client.post("/api/v1/account/register/", u)
        data = response.data
        self.assertTrue(data is not None)
        self.assertEqual(data.get("result"), True, data.get("message"))

    def test_logout_view(self):
        self._login()
        u = self.test_user
        response = self.req_client.post("/api/v1/account/logout/", {})
        data = response.data
        self.assertEqual(data.get("result"), True, data.get("message"))

    def test_account_view_get_authenticated_user(self):
        self._login()
        u = self.test_user
        response = self.req_client.get("/api/v1/account/", {})
        data = response.data
        self.assertEqual(data.get("result"), True, data.get("message"))
        self.assertTrue(data.get("data").get("user") is not None)
        self.assertEqual(data.get("data").get("user").get("username"), u["username"])

    def test_account_view_edit_authenticated_user(self):
        _, user = self._login()
        u = self.user_for_update
        response = self.req_client.put("/api/v1/account/", data=u)
        data = response.data
        self.assertEqual(data.get("result"), True, data.get("message"))
        self.assertEqual(get_user_model().objects.get(pk=user.pk).username, "TestUpdate")

    def test_search_user_view_by_query_string(self):
        _, user = self._login()
        response = self.req_client.post("/api/v1/account/search/", data={"q": user.username})
        data = response.data
        self.assertEqual(data.get("result"), True, data.get("message"))
        self.assertEqual(data.get("data").get("users")[0].get("username"), user.username)

    def _login(self):
        u = self.test_user
        user = self._create_user(u)
        response = self.req_client.post("/api/v1/account/login/", data={
            "username": u["username"],
            "password": u["password"],
        })
        return response.data, user
    
    def _create_user(self, user1):
        user = get_user_model().objects.create_user(user1["username"], user1["email"], user1["password"])
        user.first_name = user1["first_name"]
        user.last_name = user1["last_name"]
        user.phone=user1["phone"], 
        user.age=user1["age"], 
        user.status=user1["status"], 
        user.user_in_school_status=user1["user_in_school_status"], 
        user.about_me=user1["about_me"], 
        user.city=user1["city"], 
        user.country=user1["country"], 
        user.district=user1["district"], 
        user.patronymic=user1["patronymic"]
        user.save()
        return user