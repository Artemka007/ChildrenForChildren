from django.contrib.auth import get_user_model
from django.contrib.auth.models import AbstractUser, UserManager
from django.db import models
from django.core.mail import send_mail
from django.db import models
from django.utils import timezone

class CustomUser(AbstractUser):
    USER_IN_SCHOOL_STATUS = (
        ('student', 'ученик'),
        ('teacher', 'учитель'),
        ('parent', 'родитель'),
        ('moderator', 'модератор'),
        ('admin', 'админ'),
    )
    photo = models.ImageField(upload_to="users/photos", null=True, blank=True)
    # user general data
    patronymic = models.CharField(max_length=64)
    phone = models.CharField(max_length=16)
    age = models.PositiveSmallIntegerField(null=True, blank=True)
    status = models.CharField(max_length=256, null=True, blank=True)
    user_in_school_status = models.CharField(max_length=32, default="student", choices=USER_IN_SCHOOL_STATUS)
    # user location (country, city and district with street)
    country = models.CharField(max_length=128, null=True, blank=True)
    city = models.CharField(max_length=128, null=True, blank=True)
    district = models.CharField(max_length=128, null=True, blank=True)
    # about the user job, hobbies etc
    about_me = models.TextField(null=True, blank=True)

    online_date = models.DateTimeField(auto_now=True)
