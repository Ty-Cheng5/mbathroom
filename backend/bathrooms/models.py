from django.db import models

# Create your models here.
from django.db import models


class Building(models.Model):
    """A campus building — this is what a map pin points at."""
    building_record_number = models.CharField(max_length=20, unique=True)
    name = models.CharField(max_length=200)
    street = models.CharField(max_length=200, blank=True)
    lat = models.FloatField(null=True, blank=True)
    lng = models.FloatField(null=True, blank=True)

    def __str__(self):
        return self.name


class Room(models.Model):
    """One bathroom inside a building."""
    building = models.ForeignKey(Building, related_name="rooms", on_delete=models.CASCADE)
    room_record_number = models.CharField(max_length=30, unique=True)
    room_number = models.CharField(max_length=30)
    floor = models.CharField(max_length=10, blank=True)
    gender = models.CharField(max_length=20, default="unknown")

    def __str__(self):
        return f"{self.building.name} - {self.room_number}"


class Review(models.Model):
    """Someone's rating of one bathroom."""
    room = models.ForeignKey(Room, related_name="reviews", on_delete=models.CASCADE)
    username = models.CharField(max_length=80)
    stars = models.IntegerField()
    text = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.stars} stars - {self.room}"