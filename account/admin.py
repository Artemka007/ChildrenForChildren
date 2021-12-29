from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User

from account.models import CustomUser

@admin.action(description='Принять заявку на регистрацию')
def accept_user_register_request(modeladmin, request, queryset):
    queryset.update(is_active=True)

@admin.action(description='Забанить пользователя')
def ban_user(modeladmin, request, queryset):
    queryset.update(is_banned=True)

class UserAdmin(admin.ModelAdmin):
    actions = [accept_user_register_request, ban_user]

admin.site.register(CustomUser, UserAdmin)