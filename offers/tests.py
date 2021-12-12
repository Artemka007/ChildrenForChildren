from django.db.models.base import Model
from django.db.models.query_utils import refs_expression
from django.http import response
from django.test import TestCase
from rest_framework import serializers
from rest_framework.test import APIClient
from django.contrib.auth import get_user_model

from offers.serializers import CreateOfferMainSerializer

class OffersTest(TestCase):

    def setUp(self):
        self.offer = {
            "define_type_of_request": "requsts",
            "title": "Tests",
            "about": "Descryption of the test< requst",
            "back": "this is what you want back from the user",
            "user": 1,
            "is_published": True,
            "views_amoun": 0
        }

        self.request= APIClient()
        self.base_url = "/api/v1/offers/"
        
        self.user = get_user_model().objects.create_user(username="test", email="", password="123")
        

    def test_get_all_offers(self):

        self.request.login(username="test", password="123")

        # first authenticate user

        serializer = CreateOfferMainSerializer(data=self.offer)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        response = self.request.get(self.base_url)
        data = response.data
        self.assertTrue(data.get("data") is not None)
        self.assertEquals(data.get("data").get("offers")[0].get("back"), self.offer.get("back"))
        
    def test_create(self):
        # first authenticate user
        self.request.login(username="test", password="123")
        # and next send request to the server (when user is authenticated)
        data = self.request.post(self.base_url, self.offer).data
        self.assertEquals(data.get('result'), True, data.get('message'))
        self.assertTrue(data.get('data').get('offer') is not None)

    def test_offer_update(self):
        self.request.login(username="test", password="123")# log in
        serializer = CreateOfferMainSerializer(data=self.offer)# reate new Model
        serializer.is_valid(raise_exception=True)
        serializer.save()
        data = self.request.put(self.base_url+'?id='+str(serializer.instance.id), self.offer).data# put updata requst
        self.assertEquals(data.get('result'), True, data.get('message'))
        self.assertTrue(data.get('data').get('offer') is not None)
        
    def test_offer_delete(self):
        self.request.login(username="test", password="123")# log in
        serializer = CreateOfferMainSerializer(data=self.offer)# reate new Model
        serializer.is_valid(raise_exception=True)
        serializer.save()
        data = self.request.delete(self.base_url+'?id='+str(serializer.instance.id), self.offer).data
        self.assertEquals(data.get('result'), True, data.get('message'))
    
    def test_filters(self):
        serializer = CreateOfferMainSerializer(data=self.offer)
        serializer.is_valid()
        serializer.save()
        data = self.request.post(self.base_url+'search/', {'q': 'test'}).data
        self.assertEquals(data.get('result'), True, data.get('message'))
        self.assertTrue(data.get('data').get('offers') != [])