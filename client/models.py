from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Prospect(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=100)
    telephone = models.PositiveBigIntegerField()
    mail = models.CharField(max_length=100)
    picture = models.ImageField()
