# Generated by Django 5.0.6 on 2024-06-13 20:19

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
                ('street_address', models.CharField()),
                ('city', models.CharField()),
                ('state', models.CharField(validators=[property_data.validators.validate_state])),
                ('purchase_price', models.IntegerField(validators=[django.core.validators.MinValueValidator(1)])),
                ('beds', models.IntegerField(validators=[django.core.validators.MinValueValidator(0)])),
                ('baths', models.FloatField(validators=[django.core.validators.MinValueValidator(0)])),
                ('square_feet', models.IntegerField(validators=[django.core.validators.MinValueValidator(1)])),
                ('date_created', models.DateField(auto_now_add=True)),
                ('down_payment', models.FloatField(blank=True, null=True, validators=[django.core.validators.MinValueValidator(0)])),
                ('interest_rate', models.FloatField(blank=True, null=True, validators=[django.core.validators.MinValueValidator(0)])),
                ('loan_term', models.IntegerField(blank=True, null=True, validators=[django.core.validators.MinValueValidator(0)])),
                ('rental_income', models.FloatField(blank=True, null=True, validators=[django.core.validators.MinValueValidator(0)])),
                ('zipcode', models.CharField(validators=[property_data.validators.validate_zip_code])),
            ],
        ),
    ]
