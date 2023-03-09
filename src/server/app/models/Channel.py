from django.db.models import (
    IntegerField,
    CharField,
    BooleanField,
    TextField,
    ForeignKey,
    SET_NULL,
)
from django_paranoid.models import ParanoidModel


class Channel(ParanoidModel):
    id = IntegerField(primary_key=True)
    name = CharField(max_length=100, default="")
    description = TextField(blank=True, null=True)
    is_archived = BooleanField(default=False)
    incident = ForeignKey("Incident", blank=True, null=True, on_delete=SET_NULL)
