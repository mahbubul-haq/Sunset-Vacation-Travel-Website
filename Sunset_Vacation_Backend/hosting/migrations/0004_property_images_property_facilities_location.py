# Generated by Django 4.0.1 on 2022-02-19 17:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('hosting', '0003_propertyfacilities'),
    ]

    operations = [
        migrations.CreateModel(
            name='Property_Images',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('link', models.CharField(default=None, max_length=300, null=True)),
                ('hosting', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hosting.hosting')),
            ],
        ),
        migrations.CreateModel(
            name='Property_Facilities',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('facility', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hosting.facility')),
                ('hosting', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hosting.hosting')),
            ],
        ),
        migrations.CreateModel(
            name='Location',
            fields=[
                ('location_id', models.AutoField(primary_key=True, serialize=False)),
                ('longitude', models.FloatField(default=None, null=True)),
                ('latitude', models.FloatField(default=None, null=True)),
                ('address', models.CharField(default=None, max_length=200, null=True)),
                ('hosting', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hosting.hosting')),
            ],
        ),
    ]
