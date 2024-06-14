from rest_framework import serializers
from .models import MarketData

class MarketSerializer(serializers.ModelSerializer):
    class Meta:
        model = MarketData
        fields = (
            'zipcode',
            'population',
            'unemployment'
        )