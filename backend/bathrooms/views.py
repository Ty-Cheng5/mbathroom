from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from django.db.models import Avg, Count
from .models import Building, Room


def buildings(request):
    """Every building with coordinates, plus how many bathrooms it has."""
    rows = Building.objects.annotate(num_bathrooms=Count("rooms"))

    data = []
    for b in rows:
        data.append({
            "id": b.id,
            "brn": b.building_record_number,
            "name": b.name,
            "street": b.street,
            "lat": b.lat,
            "lng": b.lng,
            "num_bathrooms": b.num_bathrooms,
        })

    return JsonResponse({"buildings": data})


def rooms(request, brn):
    """Every bathroom inside one building, with its average rating."""
    rows = (Room.objects
            .filter(building__building_record_number=brn)
            .annotate(avg_stars=Avg("reviews__stars"),
                      review_count=Count("reviews")))

    data = []
    for r in rows:
        data.append({
            "id": r.id,
            "room_number": r.room_number,
            "floor": r.floor,
            "gender": r.gender,
            "avg_stars": r.avg_stars,
            "review_count": r.review_count,
        })

    return JsonResponse({"rooms": data})