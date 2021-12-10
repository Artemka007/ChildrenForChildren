from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User

from account.models import CustomUser

@admin.action(description='Accept user request to register')
def accept_request_published(modeladmin, request, queryset):
    queryset.update(is_active=True)

class UserAdmin(admin.ModelAdmin):
    actions = [accept_request_published]

admin.site.register(CustomUser, UserAdmin)