# Generated by Django 2.1.5 on 2019-01-30 12:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('analytics', '0003_auto_20190128_1423'),
    ]

    operations = [
        migrations.AlterField(
            model_name='poststatus',
            name='post',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='blog.Post'),
        ),
    ]
