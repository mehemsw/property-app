from rest_framework import serializers
from .models import PropertyData

class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = PropertyData
        fields = (
            'id',
            'street_address',
            'city',
            'state',
            'purchase_price',
            'beds',
            'baths',
            'square_feet',
            'zipcode'
        )

class RentalSerializer(serializers.ModelSerializer):
    class Meta:
        model = PropertyData
        fields = (
            'id',
            'street_address',
            'down_payment',
            'interest_rate',
            'loan_term',
            'rental_income'
        )

class GeoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PropertyData
        fields = (
            'id',
            'street_address',
            'latitude',
            'longitude'
        )