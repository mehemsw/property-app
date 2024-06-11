from rest_framework.views import APIView, Response
from .models import PropertyData
from django.core.serializers import serialize
# Create your views here.
import json

class AllProperties(APIView):

    def get(self, request):
        properties = PropertyData.objects.order_by("date_created")
        serialized_properties = serialize("json", properties)
        json_properties = json.loads(serialized_properties)
        return Response(json_properties)