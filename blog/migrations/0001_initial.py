# Generated by Django 2.1.4 on 2019-01-06 09:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=63, verbose_name='Имя')),
            ],
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(blank=True, max_length=127)),
                ('comment', models.TextField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(max_length=250, verbose_name='Описание')),
                ('title', models.CharField(max_length=127, verbose_name='Название')),
                ('image', models.ImageField(upload_to='media/', verbose_name='Изображение')),
                ('pub_date', models.DateField(auto_now_add=True, verbose_name='Дата публикации')),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='blog.Author')),
            ],
            options={
                'ordering': ['-pub_date'],
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='PostContent',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField(verbose_name='Текст')),
            ],
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=63, verbose_name='Тэг')),
            ],
        ),
        migrations.AddField(
            model_name='post',
            name='content',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='blog.PostContent'),
        ),
        migrations.AddField(
            model_name='post',
            name='tags',
            field=models.ManyToManyField(to='blog.Tag'),
        ),
        migrations.AddField(
            model_name='comment',
            name='post',
            field=models.OneToOneField(on_delete=django.db.models.deletion.DO_NOTHING, to='blog.Post'),
        ),
    ]