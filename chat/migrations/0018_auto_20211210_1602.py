# Generated by Django 3.2.10 on 2021-12-10 11:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0017_chat_last_action'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='chat',
            options={'ordering': ('last_action',)},
        ),
        migrations.RemoveField(
            model_name='chat',
            name='date',
        ),
    ]
