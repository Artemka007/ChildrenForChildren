from django.urls import path

from account.views import LoginView, LogoutView, RegisterView, AccountView, PasswordResetView, PasswordResetConfirmView, SearchUserView, UploadPhotoView

urlpatterns = [
    path('', AccountView.as_view()),
    path('search/', SearchUserView.as_view()),
    path('login/', LoginView.as_view()),
    path('logout/', LogoutView.as_view()),
    path('register/', RegisterView.as_view()),
    path('photo/upload/', UploadPhotoView.as_view()),
    path('password/reset/', PasswordResetView.as_view()),
    path('password/reset/confirm/<str:uidb64>/<str:token>/', PasswordResetConfirmView.as_view()),
]