# Generated by Django 3.2.10 on 2021-12-11 12:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('offers', '0012_rename_define_type_of_subjecte_offersmain_define_type_of_subject'),
    ]

    operations = [
        migrations.CreateModel(
            name='Subject',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64, verbose_name='название')),
            ],
        ),
        migrations.RemoveField(
            model_name='offersmain',
            name='define_type_of_subject',
        ),
        migrations.AddField(
            model_name='offersmain',
            name='define_type_of_subject',
            field=models.ManyToManyField(related_name='offer', to='offers.Subject'),
        ),
    ]
