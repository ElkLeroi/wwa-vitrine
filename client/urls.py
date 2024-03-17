from django.urls import path
from . import views

app_name = "client"

urlpatterns = [
	path(" ", views.index),
	path("index", views.index, name="index"),
    path("prospect", views.prospect, name="prospect"),
    # path("status", views.status, name='status'),
]