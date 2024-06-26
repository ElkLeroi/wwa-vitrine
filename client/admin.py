from django.contrib import admin

# models
from .models import Prospect

# Register your models here.

class ProspectAdmin(admin.ModelAdmin):
    add_form = Prospect
    list_display = ['id','first_name', 'last_name', 'sex', 'telephone', 'mail', 'frequency', 'date']

admin.site.register(Prospect, ProspectAdmin)