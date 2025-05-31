from django.contrib import admin
from .models import Order, MenuItem, Testimonial
from django.contrib.auth.models import User

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'address', 'created_at')
    
class CustomAdmin(admin.AdminSite):
    site_header = "Little Lemon Admin"
    site_title = "Little Lemon Admin"
    index_title = "Welcome to Your Admin Page"

    class Media:
        css = {"all": ("admin/css/admin_custom.css",)}  

admin.site = CustomAdmin()
admin.site.register(User)
admin.site.register(MenuItem)
admin.site.register(Testimonial)
