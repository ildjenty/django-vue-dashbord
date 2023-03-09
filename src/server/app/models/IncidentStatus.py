from django.db.models import IntegerField, CharField
from django_paranoid.models import ParanoidModel


class IncidentStatus(ParanoidModel):
    id = IntegerField(primary_key=True)
    name = CharField(max_length=20)
    order = IntegerField()
