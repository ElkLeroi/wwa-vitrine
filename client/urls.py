from django.urls import path
from . import views
# from .views import product_detail

app_name = "client"

urlpatterns = [
	path(" ", views.index),
	path("index", views.index, name="index"),
]