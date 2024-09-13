from django.contrib import admin
from .models import CarNote

class MyCarNoteAdmin(admin.ModelAdmin):
    list_display = ('note_title','note_description', 'note_km', 'note_date', 'completed')

# Register your models here.

admin.site.register(CarNote, MyCarNoteAdmin)