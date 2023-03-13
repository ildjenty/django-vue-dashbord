from django.urls import path
from django.conf.urls import include
from .views import CsrfTokenView, LoginView


urlpatterns = [
    path(
        "api/",
        include(
            [
                path("csrf_token", CsrfTokenView.as_view()),
                path("login", LoginView.as_view()),
            ]
        ),
    )
]
