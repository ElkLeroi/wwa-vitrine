from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.db import IntegrityError
from .models import Prospect

from datetime import datetime

# Create your views here.

def index(request):
	return render(request, "client/index.html")

def prospect (request):
	prenom = request.POST.get('prenom')
	nom = request.POST.get('nom')
	sex = request.POST.get('sexe')
	tel = request.POST.get('tel')
	email = request.POST.get('email')
	photo = request.POST.get('picture')

	try :
		print("one ==========")
		query_1 = Prospect.objects.filter(first_name=prenom, last_name=nom).first
		print("twoo ==========")
		return HttpResponse("L'utilisateur ", query_1, "existe déjà")
	
	except :
		try :
			today = datetime.now()
			today = today.strftime("%Y-%m-%d %H:%M")
			print(today)
			Prospect.objects.create(
				first_name = prenom,
				last_name = nom,
				telephone = tel,
				mail = email,
				picture = photo,
				date = today
			)
			print(prenom, nom, sex, tel, email, photo)
			return HttpResponse("Successfully registred !")
		except IntegrityError as e:
			error_message = str(e)
			if 'tel' in error_message:
				return HttpResponse("Tel number not unique")
			if 'mail' in error_message:
				return HttpResponse("Email not unique")
	# return render(request, "client/index.html")