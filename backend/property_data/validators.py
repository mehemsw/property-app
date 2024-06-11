from django.core.exceptions import ValidationError
import re

def validate_zip_code(zipcode):
    error_message = "Improper zip code format"
    # Message we want to give the user when passing incorrect input
    regex = r'^[0-9]{5}$'
    
    good_zip = re.match(regex, zipcode)
    # returns a boolean value [True || False]
    if good_zip:
        return zipcode
    else:
        raise ValidationError(error_message, params={ 'zipcode' : zipcode })
