from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from .models import Order, MenuItem, Testimonial
from .serializers import OrderSerializer, MenuItemSerializer, TestimonialSerializer
from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.generics import ListAPIView
from django.http import JsonResponse
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer
import re

class SignupView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email')

        if User.objects.filter(username=username).exists():
            return Response({'error': 'Username already exists'}, status=400)

        user = User.objects.create_user(username=username, password=password, email=email)
        return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def login_view(request):
    if request.method == "POST":
        data = json.loads(request.body)
        username = data.get("username")
        password = data.get("password")

        if username != "admin" or password != "123":
            return JsonResponse({"error": "Invalid credentials"}, status=401)

        return JsonResponse({"message": "Login successful"})
    return JsonResponse({"error": "GET not allowed"}, status=405)


class OrderCreateAPIView(generics.CreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class MenuItemViewSet(ReadOnlyModelViewSet):
    queryset = MenuItem.objects.filter(available=True)
    serializer_class = MenuItemSerializer
    
    
class TestimonialListView(ListAPIView):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer


chatbot = ChatBot("RestaurantBot")
trainer = ChatterBotCorpusTrainer(chatbot)
trainer.train("app.chatterbot_data.restaurant")

valid_questions = [
    "hello", "hi", "hey", "greetings",
    "where are you", "where is the restaurant", "restaurant location",
    "can i reserve", "table reservation", "how to book", "can i book",
    "do you deliver", "delivery options", "do you offer delivery",
    "can i order online", "online ordering", "menu order",
    "what are your hours", "opening hours", "closing time",
    "do you have vegetarian", "vegetarian options", "vegan meals",
    "most popular dish", "best dish", "customer favorite",
    "what is on the menu", "menu options", "food items",
    "who are you", "what can you do", "how do you work", "who made you", "can you help me",
]


def chatbot_response(request):
    user_input = request.GET.get('message', '').lower()
    if not any(re.search(pattern, user_input) for pattern in valid_questions):
        return JsonResponse({"reply": "I only answer restaurant-related questions. How can I assist you with reservations or orders?"})
    response = chatbot.get_response(user_input)
    return JsonResponse({"reply": str(response)})