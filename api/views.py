from django.shortcuts import render
from django.utils.translation import gettext_lazy as _
from django.core.mail import mail_admins

from api.mixins import ProjectAPIView



def index(request):
    return render(request, "api/index.html")

class HelpView(ProjectAPIView):
    def get(self, request):
        message = request.GET.get("message")
        mail_admins(
            "Вопрос на платформе 'Дети Детям'.",
            message
        )
        return self.get_response(True, "Сообщение отпралено в модерацию.")