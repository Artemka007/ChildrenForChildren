# Generated by Django 3.2.9 on 2021-12-03 21:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('offers', '0004_alter_offers_main_views_amoun'),
    ]

    operations = [
        migrations.AlterField(
            model_name='offers_main',
            name='views_amoun',
            field=models.BigIntegerField(default=0),
        ),
    ]
