# Generated by Django 5.0.6 on 2024-06-11 23:10

import django.core.validators
import property_data.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PropertyData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.CharField()),
                ('price', models.IntegerField(validators=[django.core.validators.MinValueValidator(1)])),
                ('beds', models.IntegerField(validators=[django.core.validators.MinValueValidator(0)])),
                ('baths', models.FloatField(validators=[django.core.validators.MinValueValidator(0)])),
                ('square_feet', models.IntegerField(validators=[django.core.validators.MinValueValidator(1)])),
                ('date_created', models.DateField(auto_now_add=True)),
                ('zipcode', models.CharField(validators=[property_data.validators.validate_zip_code])),
            ],
        ),
    ]
