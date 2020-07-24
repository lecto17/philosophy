from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
# from .serializers import *
from .serializers import ResultSerializer, PostSerializer, CommentSerializer, UserSerializer
from .models import Result, Post, Comment, User
import logging
logger = logging.getLogger(__name__)    

# Create your views here.
class ResultViewSet(viewsets.ModelViewSet):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer
        
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


# from django.shortcuts import render
# from django.http import JsonResponse

# def index(request):
#     result = [

#     ]

#     return JsonResponse(result)
