from rest_framework.views import APIView, Response
from rest_framework import status
from .models import MarketData
from .serializers import MarketSerializer
from django.shortcuts import get_object_or_404
from dotenv import load_dotenv # Allows us to interact with .env files
import requests # Pythons user friendly way to make requests to API's
import os # os will make it possible to grab key value pairs from .env
from datetime import date
# Create your views here.
load_dotenv()

class AllMarkets(APIView):

    def get(self, request):
        markets = MarketData.objects.order_by("zipcode")
        serializer = MarketSerializer(markets, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = MarketSerializer(data=request.data)
        if serializer.is_valid():
            market_created = serializer.save()
            return Response({'result': f"{market_created.zipcode} market created"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class MarketDetail(APIView):

    def get_market(self, id):
        return get_object_or_404(MarketData, pk=id)
    
    def get(self, request, id):
        market = self.get_market(id)
        serializer = MarketSerializer(market)
        return Response(serializer.data)
    
    def put(self, request, id):
        try:
            market = self.get_market(id)
        except Exception:
            return Response({'result': "Market update failed. Check zipcode"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer = MarketSerializer(market, data=request.data)
            if serializer.is_valid():
                market_updated = serializer.save()
                return Response({'result': f"Market data for {market_updated.zipcode} updated"}) 
    
    def delete(self, request, id):
        market = self.get_market(id)
        zipcode = market.zipcode
        market.delete()
        return Response({'result': f"Market data for {zipcode} deleted"}, status=status.HTTP_204_NO_CONTENT)
    
class PopulationRequest(APIView):

    def get_population(self, year, zipcode):
        base_url = f'https://api.census.gov/data/{year}/acs/acs5'
        params = {
            'get': 'NAME,B01003_001E',  # B01003_001E is the total population variable
            'for': f'zip code tabulation area:{zipcode}',
            'key': os.environ['CENSUS_API_KEY']
        }
        response = requests.get(base_url, params=params)
        
        if response.status_code == 200:
            data = response.json()
            if len(data) > 1:
                return data[1][1]  # Return the population value
            else:
                return None
        else:
            print('Error:', response.status_code, response.text)
            return None

    def get(self, request, id):
        current_year = date.today().year
        year_range = range(current_year - 4, current_year - 1)
        population_trends = {}
        for year in year_range:
            population = self.get_population(year, id)
            if population:
                population_trends[year] = population
        return Response({"result": population_trends})
    