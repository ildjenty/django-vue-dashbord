from django.db.models import IntegerField, CharField, ForeignKey, SET_NULL
from django_paranoid.models import ParanoidModel


class Incident(ParanoidModel):
    id = IntegerField(primary_key=True)
    name = CharField(max_length=100)
    status = ForeignKey(
        "IncidentStatus",
        blank=True,
        null=True,
        on_delete=SET_NULL,
    )
