from django.contrib.auth import get_user_model
from django.db import models

class Profile(models.Model):
    '''
    The model that describe a user
    '''
    # choices for know who is user in this site
    CHOICES = (
        ('student', 'ученик'),
        ('teacher', 'учитель'),
        ('parent', 'родитель'),
        ('moderator', 'модератор'),
        ('admin', 'админ'),
    )
    # foreign key to user id
    user = models.OneToOneField(get_user_model(), on_delete=models.CASCADE, related_name="profile")
    # user general data
    patronymic = models.CharField(max_length=64)
    phone = models.CharField(max_length=16)
    age = models.PositiveSmallIntegerField()
    status = models.CharField(max_length=256, null=True, blank=True)
    user_in_school_status = models.CharField(max_length=32, default="student", choices=CHOICES)
    # user location (country, city and district with street)
    country = models.CharField(max_length=128, null=True, blank=True)
    city = models.CharField(max_length=128, null=True, blank=True)
    district = models.CharField(max_length=128, null=True, blank=True)
    # about the user job, hobbies etc
    about_me = models.TextField(null=True, blank=True)
