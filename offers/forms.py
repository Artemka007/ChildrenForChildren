from django import forms
from .models import OffersMain
 
 
# creating a form
class OffersForm(forms.ModelForm):
 
    # create meta class
    class Meta:
        # specify model to be used
        model = OffersMain
 
        # specify fields to be used
        fields = [
            "define_type_of_request",
            "title",
            "about",
            "back",
            "is_published",
        ]
        # fields = '__all__' is so simple and include the date and user fields if you want include it