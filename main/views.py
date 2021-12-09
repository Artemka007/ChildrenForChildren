from django.http.response import HttpResponseRedirect
from django.shortcuts import render
from django.contrib.auth import logout

def check_user_is_not_auth_index(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect("/home")
    return render(request, "index.html", {})

def logout_user_index(request):
    logout(request)
    return HttpResponseRedirect("/login")

def check_is_auth_index(request):
    if not request.user.is_authenticated:
        return HttpResponseRedirect("/login")
    return render(request, "index.html", {})

def index_for_reset_password(request, uidb64, token):
    if request.user.is_authenticated:
        return HttpResponseRedirect("/home")
    return render(request, "index.html", {})
