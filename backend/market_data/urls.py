from django.urls import path

from .views import AllMarkets, MarketDetail, PopulationRequest

urlpatterns = [
    path('', AllMarkets.as_view(), name="all_markets"),
    path('<int:id>/', MarketDetail.as_view(), name="market_detail"),
    path("population/<int:id>/", PopulationRequest.as_view(), name='population_request'),
]