from customers.models import Customer
from customers.serializers import CustomerSerializer
from django.http import JsonResponse, Http404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET', 'POST'])
def customers(request):
    if request.method == 'GET':
        # invoke serializer and return to client
        data = Customer.objects.all()
        serializer = CustomerSerializer(data, many=True)
        return Response({'customers': serializer.data})
        
    elif request.method == 'POST':
        serializer = CustomerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'customers': serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST', 'DELETE'])
def customer(request, id):
    # invoke serializer and return to client
    try:
        data = Customer.objects.get(pk=id)
    except Customer.DoesNotExist:
        raise Http404('Customer does not exist')
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if(request.method == 'GET'):
        serializer = CustomerSerializer(data)
        return Response({'customer': serializer.data}, status=status.HTTP_200_OK)
    elif (request.method == 'DELETE'):
        data.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif (request.method == 'POST'):
        serializer = CustomerSerializer(data, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'customer': serializer.data}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)