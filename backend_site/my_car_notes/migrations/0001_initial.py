# Generated by Django 4.2.16 on 2024-09-13 00:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CarNote',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('note_title', models.CharField(max_length=120)),
                ('note_description', models.TextField()),
                ('note_km', models.PositiveIntegerField()),
                ('note_date', models.DateTimeField()),
                ('completed', models.BooleanField(default=False)),
            ],
        ),
    ]