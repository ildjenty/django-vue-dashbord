from logging import getLogger
import json


class RequestDetailLogMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        return response

    def process_view(self, request, _, __, ___):
        logger = getLogger(__name__)
        user = request.user
        params = json.loads(request.body) if request.body else None
        logger.info(f"{request.path} {request.method} user={user}, params={params}")
        return None
