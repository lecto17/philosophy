from rest_framework import viewsets

from .models import Result
from .serializers import *


class ResultViewSet(viewsets.ModelViewSet):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer
    
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class DiscussPostViewSet(viewsets.ModelViewSet):
    queryset = DiscussPost.objects.all()
    serializer_class = DiscussPostSerializer

class DiscussCommentViewSet(viewsets.ModelViewSet):
    queryset = DiscussComment.objects.all()
    serializer_class = DiscussCommentSerializer


# from django.shortcuts import render
# from django.http import JsonResponse

# def index(request):
#     result = [

#     ]

#     return JsonResponse(result)