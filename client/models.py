from django.db import models
from django.contrib.auth.models import User

# Create your models here.

def prospect_pic(instance, filename):
    return 'media/prospects/{filename}'.format(
        filename = f"{instance.first_name}_{instance.last_name}"
    )

class Prospect(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=100)
    telephone = models.PositiveBigIntegerField(unique=True, null=True, blank=True)
    mail = models.CharField(max_length=100, unique=True)
    picture = models.ImageField(upload_to=prospect_pic)
    frequency = models.PositiveBigIntegerField(default=0)
    date = models.DateTimeField(null=True, blank=True)
    sex = models.CharField(max_length=1, null=True, blank=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
