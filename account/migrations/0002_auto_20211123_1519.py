# Generated by Django 3.2.9 on 2021-11-23 10:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='about_me',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='city',
            field=models.CharField(blank=True, max_length=128, null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='country',
            field=models.CharField(blank=True, max_length=128, null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='status',
            field=models.CharField(blank=True, max_length=256, null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='user_in_school_status',
            field=models.CharField(choices=[('studend', 'ученик'), ('teacher', 'учитель'), ('parent', 'родитель'), ('moderator', 'модератор'), ('admin', 'админ')], default='student', max_length=32),
        ),
    ]
