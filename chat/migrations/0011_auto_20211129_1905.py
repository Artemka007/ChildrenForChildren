# Generated by Django 3.2.9 on 2021-11-29 14:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0010_chat_banned_list'),
    ]

    operations = [
        migrations.CreateModel(
            name='DocFileUpload',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(upload_to='chat/message/docs')),
            ],
        ),
        migrations.CreateModel(
            name='ImgFileUpload',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.ImageField(upload_to='chat/message/imgs')),
            ],
        ),
        migrations.CreateModel(
            name='VideoFileUpload',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(upload_to='chat/message/videos')),
            ],
        ),
        migrations.AddField(
            model_name='chat',
            name='docs',
            field=models.ManyToManyField(blank=True, default=[], related_name='messages', to='chat.DocFileUpload'),
        ),
        migrations.AddField(
            model_name='chat',
            name='imgs',
            field=models.ManyToManyField(blank=True, default=[], related_name='messages', to='chat.ImgFileUpload'),
        ),
        migrations.AddField(
            model_name='chat',
            name='videos',
            field=models.ManyToManyField(blank=True, default=[], related_name='messages', to='chat.VideoFileUpload'),
        ),
    ]