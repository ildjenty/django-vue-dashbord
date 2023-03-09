from django.db.models import IntegerField, ForeignKey, BooleanField, CASCADE
from django_paranoid.models import ParanoidModel
from app.models import User, Issue


class IssueUser(ParanoidModel):
    id = IntegerField(primary_key=True)
    user = ForeignKey("User", on_delete=CASCADE)
    issue = ForeignKey("Issue", on_delete=CASCADE)
    is_manager = BooleanField(default=False)
