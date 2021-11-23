from django.shortcuts import render

def index(request):
    return render(request, "index.html", {})

def index_for_reset_password(request, uidb64, token):
    return render(request, "index.html", {})
