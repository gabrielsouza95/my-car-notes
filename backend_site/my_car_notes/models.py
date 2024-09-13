from django.db import models

# Create your models here.

class CarNote(models.Model):
    note_title = models.CharField(max_length=120)
    note_description = models.TextField()
    note_km = models.PositiveIntegerField() # Field to register the number the odometer was registering when adding the given note
    note_date = models.DateTimeField()
    completed = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.note_title