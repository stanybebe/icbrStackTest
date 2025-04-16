from django.shortcuts import render

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def submit_form(request):
    if request.method == "POST":
        data = json.loads(request.body)
        name = data.get("name")
        email = data.get("email")
        message = data.get("message")
        print(f"Received: {name}, {email}, {message}")
        return JsonResponse({"message": "Form submitted successfully!"})
    return JsonResponse({"error": "Invalid request"}, status=400)
