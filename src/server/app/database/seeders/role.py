from app.models import Role


def exec():
    default_roles = [
        Role(name="Manager", order=1),
        Role(name="Maintainer", order=2),
        Role(name="Developer", order=3),
        Role(name="Guest", order=4),
    ]

    Role.objects.bulk_create(default_roles)
