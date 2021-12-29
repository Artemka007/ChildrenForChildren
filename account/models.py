from django.contrib.auth.models import AbstractUser
from django.db import models
from django.db import models

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
    user_in_school_status = models.CharField(max_length=32, default="student", choices=USER_IN_SCHOOL_STATUS)
    # user location (country, city and district with street)
    country = models.CharField(max_length=128, null=True, blank=True)
    city = models.CharField(max_length=128, null=True, blank=True)
    district = models.CharField(max_length=128, null=True, blank=True)
    # about the user job, hobbies etc
    about_me = models.TextField(null=True, blank=True)

    online_date = models.DateTimeField(auto_now=True)

    is_banned = models.BooleanField(default=False)

    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"
