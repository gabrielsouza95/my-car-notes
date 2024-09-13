from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CarNoteSerializer
from .models import CarNote

# Create your views here.

class CarNoteView(viewsets.ModelViewSet):
    serializer_class = CarNoteSerializer
    queryset = CarNote.objects.all()
    