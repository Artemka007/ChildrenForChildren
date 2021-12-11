from django.contrib.auth import get_user_model
from django.db import models
from django.db.models.enums import Choices
from django.http import request
from django.contrib.auth.models import User

class OffersMain(models.Model): #main module
    
    TYPE_OF_OFFER = (
        ('offers', 'предложения'),
        ('requsts', 'запросы'),
        ('quastions', 'вопросы')
    )
    

    
    # generral settings
    
    define_type_of_request = models.CharField(choices=TYPE_OF_OFFER, default='offers', max_length=32) #select type of the mouotion
    
    title = models.CharField(max_length=64, verbose_name='Имя предложения') # the tittle of the offer
    about = models.TextField(verbose_name="Описание предложения....")# the content of the offer
    back = models.TextField(verbose_name='Что вы хотите в замен?')# what do you want back
    date = models.DateTimeField(auto_now_add=True)# when the is was published/chenged
    
    # user
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='offers') # by who published
    
    # flags 
    is_published  = models.BooleanField(default=True) # is publishe(true = is, False = not)
    
    views_amoun = models.BigIntegerField(default=0) # Amount of views
    
    def __str__(self):
        return self.title

    class Meta:
        ordering = ('date',)

class subject(models.Model):
    title = models.CharField(max_length=64)