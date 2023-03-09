from django.db.models import IntegerField, ForeignKey, DateField, SET_NULL
from django_paranoid.models import ParanoidModel


class Issue(ParanoidModel):
    id = IntegerField(primary_key=True)
    priority = ForeignKey("Priority", blank=True, null=True, on_delete=SET_NULL)
    start_date = DateField(blank=True)
    due_date = DateField(blank=True)
