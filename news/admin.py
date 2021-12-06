from django import forms
from django.contrib import admin
from ckeditor.widgets import CKEditorWidget

from .models import New

class PostAdminForm(forms.ModelForm):
    body = forms.CharField(widget=CKEditorWidget())
    class Meta:
        model = New
        fields = "__all__"

class PostAdmin(admin.ModelAdmin):
    form = PostAdminForm

admin.site.register(New, PostAdmin)