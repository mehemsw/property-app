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

def validate_state(state):
    error_message = "Improper state format. Please use abbreviation"
    # Message we want to give the user when passing incorrect input
    regex = r'^[A-Z]{2}$'
    
    good_state = re.match(regex, state)
    # returns a boolean value [True || False]
    if good_state:
        return state
    else:
        raise ValidationError(error_message, params={ 'state' : state })