from django.contrib import admin

# models
from .models import Prospect

# Register your models here.

class ProspectAdmin(admin.ModelAdmin):
    add_form = Prospect
    list_display = ['id','first_name', 'last_name', 'telephone', 'mail', 'picture', 'date']

admin.site.register(Prospect, ProspectAdmin)