# Generated by Django 3.2.9 on 2021-12-08 09:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0014_docfileupload_name'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='chat',
            options={'ordering': ('-date',)},
        ),
        migrations.AddField(
            model_name='chat',
            name='date',
            field=models.DateTimeField(auto_now=True),
        ),
    ]