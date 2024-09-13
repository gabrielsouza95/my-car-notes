from  rest_framework import serializers
from .models import CarNote

class CarNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarNote
        fields = ('id','note_title','note_description', 'note_km', 'note_date', 'completed')