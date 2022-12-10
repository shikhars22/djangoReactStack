from customers.models import Customer
from customers.serializers import CustomerSerializer
from django.http import JsonResponse, Http404

def customers(request):
    # invoke serializer and return to client
    data = Customer.objects.all()
    serializer = CustomerSerializer(data, many=True)
    return JsonResponse({'customers': serializer.data})

def customer(request, id):
    # invoke serializer and return to client
    try:
        data = Customer.objects.get(pk=id)
    except Customer.DoesNotExist:
        raise Http404('Customer does not exist')
    serializer = CustomerSerializer(data)
    return JsonResponse({'customer': serializer.data})