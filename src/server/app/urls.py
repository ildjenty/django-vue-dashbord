from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from .views import CsrfTokenView, MessageView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include([
        path('csrf_token', CsrfTokenView.as_view()),
        path('message', MessageView.as_view())
    ]))
]
