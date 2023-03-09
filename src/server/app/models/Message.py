from django.db.models import (
    IntegerField,
    ForeignKey,
    BooleanField,
    TextField,
    CASCADE,
    SET_NULL,
)
from django_paranoid.models import ParanoidModel
from app.models import Channel, User


class Message(ParanoidModel):
    id = IntegerField(primary_key=True)
    channel = ForeignKey("Channel", on_delete=CASCADE)
    user = ForeignKey("User", on_delete=CASCADE)
    body = TextField()
    thread_message = ForeignKey("Message", blank=True, null=True, on_delete=SET_NULL)
    is_thread = BooleanField(default=False)
