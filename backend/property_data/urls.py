from django.urls import path

from .views import AllProperties

urlpatterns = [
    path('', AllProperties.as_view(), name="all_properties")
]