from django.db.models import IntegerField, CharField
from django_paranoid.models import ParanoidModel


class Division(ParanoidModel):
    id = IntegerField(primary_key=True)
    name = CharField(max_length=100)
    sort_order = IntegerField()
