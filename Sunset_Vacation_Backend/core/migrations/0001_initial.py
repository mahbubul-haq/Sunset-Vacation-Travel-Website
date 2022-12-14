# Generated by Django 4.0.1 on 2022-02-07 18:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Address',
            fields=[
                ('address_id', models.AutoField(primary_key=True, serialize=False)),
                ('house_no', models.IntegerField(default=None)),
                ('city', models.CharField(default=None, max_length=45, null=True)),
                ('zipcode', models.IntegerField(default=None)),
                ('country', models.CharField(default=None, max_length=45, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('user_id', models.AutoField(primary_key=True, serialize=False)),
                ('firstname', models.CharField(default=None, max_length=100, null=True)),
                ('lastname', models.CharField(default=None, max_length=100, null=True)),
                ('email', models.EmailField(default=None, max_length=50, null=True, unique=True)),
                ('phone_no', models.CharField(default=None, max_length=20, null=True)),
                ('host', models.BooleanField(default=False)),
                ('password', models.CharField(default=None, max_length=500, null=True)),
                ('address', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='core.address')),
            ],
        ),
    ]
