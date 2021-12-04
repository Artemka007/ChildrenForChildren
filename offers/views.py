from django.http.response import HttpResponse
from django.shortcuts import render

# relative import of forms
from .models import OffersMain
from .forms import OffersForm

def indexx(request):
    AllOfers = OffersMain.objects.all()
    return render(request, "indexx.html", {'AllOfers': AllOfers})

def create_view(request):
    # dictionary for initial data with
    # field names as keys
    context ={}
 
    # add the dictionary during initialization
    form = OffersForm(request.POST or None)
    if form.is_valid():
        form.save()
         
    context['form']= form
    return render(request, "update_view.html", context)

