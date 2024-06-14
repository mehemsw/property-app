# from rest_framework.views import APIView, Response #<-- Utilize to handle API behavior
# from dotenv import load_dotenv # Allows us to interact with .env files
# import requests # Pythons user friendly way to make requests to API's
# import os # os will make it possible to grab key value pairs from .env
# import json
# from datetime import date

# load_dotenv()

# class PopulationRequest(APIView):

#     def get_population(year, zipcode):
#         base_url = f'https://api.census.gov/data/{year}/acs/acs5'
#         params = {
#         'get': 'NAME,B01003_001E',  # B01003_001E is the total population variable
#         'for': f'zip code tabulation area:{zipcode}',
#         'key': os.environ['CENSUS_API_KEY']
#         }
#         response = requests.get(base_url, params=params)
        
#         if response.status_code == 200:
#             data = response.json()
#             if len(data) > 1:
#                 return data[1][1]  # Return the population value
#             else:
#                 return None
#         else:
#             print('Error:', response.status_code, response.text)
#             return None

#     def get(self, request, id):
#         year = date.today().year - 1
#         resp = self.get_population(year, id)
#         json_resp = json.dumps({'results': resp})
#         return Response(json_resp)