# Generated by Django 3.2.10 on 2021-12-10 09:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0016_auto_20211209_1310'),
    ]

    operations = [
        migrations.AddField(
            model_name='chat',
            name='last_action',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
