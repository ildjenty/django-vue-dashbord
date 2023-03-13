from django.views import View
from django.http import JsonResponse
from app.presenters.user import create_user_auth_data


class SessionCheckView(View):
    def get(self, request):
        user = request.user

        if user.is_authenticated:
            return JsonResponse(
                data=create_user_auth_data(user, True),
                status=200,
            )

        return JsonResponse(data={"isAuthenticated": False}, status=200)
