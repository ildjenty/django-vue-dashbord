from django.views import View
from django.http import JsonResponse
from datetime import datetime
import json

class MessageView(View):
    def get(self, _):
        now_str = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        return JsonResponse(
            data={'message': f'{now_str}にアクセスしました'},
            status=200
        )

    def post(self, request):
        params = json.loads(request.body)
        datetime_ = params.get('datetime')
        return JsonResponse(
            data={'message': f'{datetime_}が送られました'},
            status=200
        )
