from django.contrib.auth import get_user_model
from django.db import models

class Subject(models.Model):
    name = models.CharField(max_length=64)
    
    def __str__(self):
        return self.name

class OffersMain(models.Model): #main module
    
    TYPE_OF_OFFER = (
        ('offers', 'предложения'),
        ('requsts', 'запросы'),
        ('quastions', 'вопросы')
    )

    # generral settings
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name="offer", null=True, blank=True)
    define_type_of_request = models.CharField(choices=TYPE_OF_OFFER, default='offers', max_length=32) #select type of the mouotion
    
    title = models.CharField(max_length=64) # the tittle of the offer
    about = models.TextField()# the content of the offer
    back = models.TextField()# what do you want back
    date = models.DateTimeField(auto_now_add=True)# when the is was published/chenged
    
    # user
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='offers') # by who published
    
    # flags 
    is_archived = models.BooleanField(default=False)
    
    views_amoun = models.BigIntegerField(default=0) # Amount of views
    
    def __str__(self):
        return self.title

    class Meta:
        ordering = ('date',)

class Subject(models.Model):
    name = models.CharField(max_length=64)
    
    def __str__(self):
        return self.name
