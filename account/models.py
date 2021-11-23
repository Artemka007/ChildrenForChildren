from django.contrib.auth import get_user_model
from django.db import models

class Profile(models.Model):
    user = models.OneToOneField(get_user_model(), on_delete=models.CASCADE, related_name="profile")
    patronymic = models.CharField(max_length=64)
    phone = models.CharField(max_length=16)
    age = models.PositiveSmallIntegerField()
    
    
