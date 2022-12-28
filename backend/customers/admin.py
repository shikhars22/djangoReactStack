from django.contrib import admin
from customers.models import Customer
from customers.models import Order

admin.site.register(Customer)

admin.site.register(Order)