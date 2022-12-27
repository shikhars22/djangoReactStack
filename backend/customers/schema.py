import graphene
from graphene_django import DjangoObjectType
from customers.models import Customer
# import time

class CustomerType(DjangoObjectType):
    class Meta:
        model=Customer
        fields='__all__'

class CreateCustomer(graphene.Mutation):
    class Arguments:
        name = graphene.String()
        industry = graphene.String()
    
    customer = graphene.Field(CustomerType)

    def mutate(root, info, name, industry):
        #define the customer object and save to db
        # time.sleep(5)
        # raise
        customer = Customer(name=name, industry=industry)
        customer.save()
        return CreateCustomer(customer=customer)

class Query(graphene.ObjectType):
    customers = graphene.List(CustomerType)
    customerByName = graphene.List(CustomerType, name=graphene.String(required=True))

    def resolve_customers(root, info):
        return Customer.objects.all()

    def resolve_customerByName(root, info, name):
        try:
            return Customer.objects.filter(name=name)
        except Customer.DoesNotExist:
            return None

class Mutations(graphene.ObjectType):
    createCustomer = CreateCustomer.Field()

schema = graphene.Schema(query=Query, mutation=Mutations)