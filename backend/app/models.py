from django.db import models

class Order(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    address = models.TextField()
    items = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.created_at}"

class MenuItem(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image = models.ImageField(upload_to='menu_images/', blank=True, null=True)
    available = models.BooleanField(default=True)

    def __str__(self):
        return self.name
    
class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    rating = models.FloatField()
    review = models.TextField()
    image = models.ImageField(upload_to='testimonials/', default='default_user.png')

    def __str__(self):
        return self.name