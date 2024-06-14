from django.db import models
from .validators import validate_zip_code, validate_state
from django.core import validators as v

# Create your models here.
class PropertyData(models.Model):
    street_address = models.CharField()
    city = models.CharField()
    state = models.CharField(validators=[validate_state])
    purchase_price = models.IntegerField(validators=[v.MinValueValidator(1)])
    beds = models.IntegerField(validators=[v.MinValueValidator(0)])
    baths = models.FloatField(validators=[v.MinValueValidator(0)])
    square_feet = models.IntegerField(validators=[v.MinValueValidator(1)])
    date_created = models.DateField(auto_now_add=True)
    down_payment = models.FloatField(null=True, blank=True, validators=[v.MinValueValidator(0)])
    interest_rate = models.FloatField(null=True, blank=True, validators=[v.MinValueValidator(0)])
    loan_term = models.IntegerField(null=True, blank=True, validators=[v.MinValueValidator(0)])
    rental_income = models.FloatField(null=True, blank=True, validators=[v.MinValueValidator(0)])
    latitude = models.DecimalField(max_digits=17, decimal_places=14, null=True, blank=True)
    longitude = models.DecimalField(max_digits=17, decimal_places=14, null=True, blank=True)
    zipcode = models.CharField(validators=[validate_zip_code])

    def __str__(self) -> str:
        return f"Property Data for : {self.address}"
