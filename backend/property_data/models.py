from django.db import models
from .validators import validate_zip_code
from django.core import validators as v

# Create your models here.
class PropertyData(models.Model):
    address = models.CharField()
    price = models.IntegerField(validators=[v.MinValueValidator(1)])
    beds = models.IntegerField(validators=[v.MinValueValidator(0)])
    baths = models.FloatField(validators=[v.MinValueValidator(0)])
    square_feet = models.IntegerField(validators=[v.MinValueValidator(1)])
    date_created = models.DateField(auto_now_add=True)
    zipcode = models.CharField(validators=[validate_zip_code])

    def __str__(self) -> str:
        return f"Property Data for : {self.address}"
