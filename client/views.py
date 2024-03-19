from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.db import IntegrityError
from .models import Prospect

from datetime import datetime

# Create your views here.

def index(request):
	return render(request, "client/index.html")

# def status(request):
# 	return render(request, "client/status.html")

def prospect (request):
	prenom = request.POST.get('prenom')
	nom = request.POST.get('nom')
	sexe = request.POST.get('sexe')
	tel = request.POST.get('tel')
	email = request.POST.get('email')
	photo = request.POST.get('picture')
	frequence = request.POST.get('frequence')
	try :

		query_1 = Prospect.objects.filter(first_name=prenom, last_name=nom).first()

		user = f"Le prospect {query_1} existe déjà."

		if query_1 is not None:
	
			context = {
				"echec" : True,
				"message" : user,
			}
	
			return render(request, "client/status.html", context)
		
		else :
			raise ValueError("query_1 is None")

	except ValueError as e:
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
				date = today,
				sex=sexe,
				frequency = frequence
			)
	
			context = {
				"success" : True,
			}
			return render(request, "client/status.html", context)
		
		except IntegrityError as e:
			error_message = str(e)
	
			if 'tel' in error_message:
				message = f"Le numero {tel} a déjà été utilisé."
				context = {
					"echec" : True,
					"message" : message,
				}
				return render(request, "client/status.html", context)
			
			elif 'mail' in error_message:
				message = f"L'adresse mail {email} a déjà été utilisé."
				context = {
					"echec" : True,
					"message" : message,
				}
				return render(request, "client/status.html", context)
				
	return render(request, "client/status.html")
