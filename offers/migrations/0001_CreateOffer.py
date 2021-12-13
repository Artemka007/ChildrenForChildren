# Generated by Django 3.2.10 on 2021-12-13 16:44

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Subject',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64)),
            ],
        ),
        migrations.CreateModel(
            name='OffersMain',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('define_type_of_request', models.CharField(choices=[('offers', 'предложения'), ('requsts', 'запросы'), ('quastions', 'вопросы')], default='offers', max_length=32)),
                ('title', models.CharField(max_length=64)),
                ('about', models.TextField()),
                ('back', models.TextField()),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('is_public', models.BooleanField(default=False)),
                ('is_archived', models.BooleanField(default=False)),
                ('views_amoun', models.BigIntegerField(default=0)),
                ('subject', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='offer', to='offers.subject')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='offers', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ('date',),
            },
        ),
    ]
