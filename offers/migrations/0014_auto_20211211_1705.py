# Generated by Django 3.2.10 on 2021-12-11 12:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('offers', '0013_auto_20211211_1700'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='offersmain',
            name='define_type_of_subject',
        ),
        migrations.AddField(
            model_name='offersmain',
            name='define_type_of_subject',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='offer', to='offers.subject'),
        ),
    ]
