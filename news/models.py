from django.db import models

from django.contrib.auth import get_user_model

from ckeditor.fields import RichTextField

class New(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name="news")
    title = models.CharField(max_length=64, verbose_name="Название")
    body = RichTextField()
    date = models.DateTimeField(auto_now=True, verbose_name="Дата (необязательно)")
