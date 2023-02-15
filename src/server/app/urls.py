from django.urls import path
from django.conf.urls import include
from .views import CsrfTokenView, MessageView


urlpatterns = [
    path('api/', include([
        path('csrf_token', CsrfTokenView.as_view()),
        path('message', MessageView.as_view())
    ]))
]
