# Generated by Django 2.1.5 on 2019-01-28 12:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_auto_20190106_1340'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='comment',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='comment',
            name='username',
            field=models.CharField(max_length=127),
        ),
    ]
