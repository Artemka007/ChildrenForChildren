from django.contrib.auth import get_user_model
from django.db import models

class Profile(models.Model):
    CHOICES = (
        ('student', 'ученик'),
        ('teacher', 'учитель'),
        ('parent', 'родитель'),
        ('moderator', 'модератор'),
        ('admin', 'админ'),
    )
    user = models.OneToOneField(get_user_model(), on_delete=models.CASCADE, related_name="profile")
    patronymic = models.CharField(max_length=64)
    phone = models.CharField(max_length=16)
    age = models.PositiveSmallIntegerField()
    status = models.CharField(max_length=256, null=True, blank=True)
    user_in_school_status = models.CharField(max_length=32, default="student", choices=CHOICES)
    country = models.CharField(max_length=128, null=True, blank=True)
    city = models.CharField(max_length=128, null=True, blank=True)
    district = models.CharField(max_length=128, null=True, blank=True)
    about_me = models.TextField(null=True, blank=True)
