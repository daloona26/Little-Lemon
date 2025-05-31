from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from rest_framework.routers import DefaultRouter
from .views import SignupView, OrderCreateAPIView, MenuItemViewSet, TestimonialListView, chatbot_response

router = DefaultRouter()
router.register(r'menu-items', MenuItemViewSet)

urlpatterns = [
    path('app/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('app/signup/', SignupView.as_view(), name='signup'),
    path('app/order-online/', OrderCreateAPIView.as_view(), name='order-create'),
    path('app/', include(router.urls)),
    path('app/testimonials/', TestimonialListView.as_view(), name='testimonials'),
    path('chatbot/', chatbot_response, name='chatbot'),
]


