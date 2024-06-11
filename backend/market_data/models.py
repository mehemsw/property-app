from django.db import models
from .validators import validate_zip_code

# Create your models here.
class MarketData(models.Model):
    zipcode = models.CharField(primary_key=True, validators=[validate_zip_code])
    population = models.BigIntegerField()
    unemployment = models.FloatField()

    def __str__(self) -> str:
        return f"Market Data for : {self.zipcode}"
