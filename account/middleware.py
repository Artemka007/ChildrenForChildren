import datetime

from django.http.response import HttpResponseRedirect
from django.contrib.auth import logout

class BannedMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
    
    def __call__(self, request):
        response = self.get_response(request)
        if request.user.is_authenticated and request.user.is_banned:
            logout(request)
            return HttpResponseRedirect("/login")
        return response