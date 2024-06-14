from django.urls import path

from .views import AllProperties, PropertyDetail, RentalDetail, GeoRequest, WalkRequest, GeoDetail

urlpatterns = [
    path('', AllProperties.as_view(), name="all_properties"),
    path('<int:id>/', PropertyDetail.as_view(), name="property_detail"),
    path('rentals/<int:id>/', RentalDetail.as_view(), name="rental_detail"),
    path('geo/<int:id>/', GeoRequest.as_view(), name="geo_request"),
    path('geo/detail/<int:id>/', GeoDetail.as_view(), name="geo_request"),
    path('walkscore/<int:id>/', WalkRequest.as_view(), name="walk_request"),
]