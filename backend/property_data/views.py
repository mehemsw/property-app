from rest_framework.views import APIView, Response
from rest_framework import status
from .models import PropertyData
from .serializers import PropertySerializer, RentalSerializer, GeoSerializer
from django.shortcuts import get_object_or_404
import requests
from dotenv import load_dotenv
import os
# Create your views here.
load_dotenv()

class AllProperties(APIView):

    def get(self, request):
        properties = PropertyData.objects.order_by("date_created")
        serializer = PropertySerializer(properties, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = PropertySerializer(data=request.data)
        if serializer.is_valid():
            property_created = serializer.save()
            return Response({'result': f"{property_created.street_address} property created"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class PropertyDetail(APIView):

    def get_property(self, id):
        return get_object_or_404(PropertyData, pk=id)

    def get(self, request, id):
        prop = self.get_property(id)
        serializer = PropertySerializer(prop)
        return Response(serializer.data)
    
    def put(self, request, id):
        try:
            prop = self.get_property(id)
        except Exception:
            return Response({'result': "Property update failed. Check id"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer = PropertySerializer(prop, data=request.data)
            if serializer.is_valid():
                property_updated = serializer.save()
                return Response({'result': f"{property_updated.street_address} updated"}) 
    
    def delete(self, request, id):
        prop = self.get_property(id)
        address = prop.street_address
        prop.delete()
        return Response({'result': f"{address} deleted"}, status=status.HTTP_204_NO_CONTENT)
    
class RentalDetail(APIView):

    def get_rental(self, id):
        return get_object_or_404(PropertyData, pk=id)

    def get(self, request, id):
        prop = self.get_rental(id)
        serializer = RentalSerializer(prop)
        return Response(serializer.data)
    
    def put(self, request, id):
        try:
            prop = self.get_rental(id)
        except Exception:
            return Response({'result': "Property update failed. Check id"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer = RentalSerializer(prop, data=request.data)
            if serializer.is_valid():
                property_updated = serializer.save()
                return Response({'result': f"Rental data for {property_updated.street_address} updated"}) 

class GeoDetail(APIView):

    def get_property(self, id):
        return get_object_or_404(PropertyData, pk=id)
    
    def get(self, request, id):
        prop = self.get_property(id)
        serializer = GeoSerializer(prop)
        return Response(serializer.data)
    
    def put(self, request, id):
        try:
            prop = self.get_property(id)
        except Exception:
            return Response({'result': "Lat/Long update failed. Check id"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer = GeoSerializer(prop, data=request.data)
            if serializer.is_valid():
                property_updated = serializer.save()
                return Response({'result': f"Geo data for {property_updated.street_address} updated"}) 

class GeoRequest(APIView):

    def get_property(self, id):
        return get_object_or_404(PropertyData, pk=id)

    def get(self, request, id):
        prop = self.get_property(id)
        street = prop.street_address
        city = prop.city
        state = prop.state
        zip_code = prop.zipcode

        # Construct the API URL
        base_url = "https://geocoding.geo.census.gov/geocoder/locations/onelineaddress"
        params = {
            "address": f"{street}, {city}, {state} {zip_code}",
            "benchmark": "Public_AR_Current",  # You can change the benchmark if needed
            "format": "json"
        }

        # Send the request to the Census Geocoding API
        response = requests.get(base_url, params=params)

        # Check if the request was successful
        if response.status_code == 200:
            data = response.json()
            if 'result' in data and 'addressMatches' in data['result']:
                matches = data['result']['addressMatches']
                if matches:
                    # Get the coordinates of the first match
                    coordinates = matches[0]['coordinates']
                    return Response({"result": coordinates})
                else:
                    return Response({'result': "No address found"}, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response({'result': "Invalid response format"})
        else:
            Response({'result': f"Request failed with status code {response.status_code}"})

class WalkRequest(APIView):

    def get_property(self, id):
        return get_object_or_404(PropertyData, pk=id)

    def get(self, request, id):
        prop = self.get_property(id)
        street_addr = prop.street_address.replace(' ', '%20')
        city = prop.city.replace(' ', '%20')
        state = prop.state
        zipcode = prop.zipcode
        params = {
            'format': 'json',       # Response format
            'address': f"{street_addr}%20{city}%20{state}%20{zipcode}", # The address you want to get the Walk Score for
            'lat': prop.latitude,   # Latitude of the address
            'lon': prop.longitude,  # Longitude of the address
            'transit': 1,           # Add Transit Score
            'bike': 1,              # Add Bike Score
            'wsapikey': os.environ['WALK_SCORE_API_KEY']  # API key
        }

        response = requests.get('https://api.walkscore.com/score', params=params)

        data = response.json()
        if data['status'] == 1:
            return Response({'result': data})
        else:
            return Response({'result': f'Error: check walk score status code {data.status}'})