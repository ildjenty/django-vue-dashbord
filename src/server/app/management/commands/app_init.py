from django.core.management.base import BaseCommand, CommandParser
from django.db import transaction
from app.models import User, Role
from app.database import seeders


class Command(BaseCommand):
    @transaction.atomic
    def handle(self, *args, **options) -> None:
        seeders.priority.exec()
        seeders.role.exec()

        User.objects.create(
            login_id="admin",
            first_name="管理者",
            last_name="システム",
            en_first_name="Admin",
            en_last_name="System",
            is_superuser=True,
            password="dashboard2023",
        )
