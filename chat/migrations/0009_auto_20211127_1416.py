# Generated by Django 3.2.9 on 2021-11-27 09:16

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('chat', '0008_alter_message_user'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='message',
            options={'ordering': ('date',)},
        ),
        migrations.AddField(
            model_name='message',
            name='readers',
            field=models.ManyToManyField(blank=True, default=[], related_name='read_messages', to=settings.AUTH_USER_MODEL),
        ),
    ]
