from django.urls import path
from . import views

urlpatterns = [
    path("api/buildings", views.buildings),
    path("api/buildings/<str:brn>/rooms", views.rooms),
]