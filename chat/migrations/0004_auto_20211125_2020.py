# Generated by Django 3.2.9 on 2021-11-25 15:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0003_message'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chat',
            name='about',
            field=models.CharField(blank=True, max_length=1024, null=True),
        ),
        migrations.AlterField(
            model_name='chat',
            name='photo',
            field=models.ImageField(blank=True, null=True, upload_to='chat/photos'),
        ),
        migrations.AlterField(
            model_name='chat',
            name='title',
            field=models.CharField(blank=True, max_length=128, null=True),
        ),
    ]
