from django.contrib import admin
from .models import OffersMain

admin.site.register(OffersMain)

# Register your models here.
class OffersMainAdmin(admin.ModelAdmin):
    pass