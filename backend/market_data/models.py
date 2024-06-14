from django.db import models
from .validators import validate_zip_code

# Create your models here.
class MarketData(models.Model):
    zipcode = models.CharField(validators=[validate_zip_code])
    year = models.IntegerField()
    population = models.BigIntegerField(blank=True, null=True)
    median_household_income = models.DecimalField(max_digits=11, decimal_places=2, blank=True, null=True)
    unemployment = models.DecimalField(max_digits=4, decimal_places=1, blank=True, null=True)

    def __str__(self) -> str:
        return f"Market Data for : {self.zipcode}"
