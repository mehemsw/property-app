from django.db import models
# from property_data.models import PropertyData

# Create your models here.
class RentalData(models.Model):
    purchase_price = models.IntegerField()
    # down_payment = models.FloatField()
    # interest_rate = models.FloatField()
    # loan_term = models.IntegerField()
    # rental_income = models.FloatField()
    # property = models.ForeignKey(PropertyData, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f"Rental Data for : {self.property}"