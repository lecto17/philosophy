from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from django.http import HttpResponse
from rest_framework.decorators import action
# from .serializers import *
from .serializers import ResultSerializer, PostSerializer, CommentSerializer, UserSerializer
from .models import Result, Post, Comment, User

# Create your views here.
class ResultViewSet(viewsets.ModelViewSet):
    # queryset = Result.objects.all()
    serializer_class = ResultSerializer    

    @action(detail=True, methods=['get'])
    def get_queryset(self):
        result = Result.objects.get(types = self.request.query_params.get('id'))
        result.result += 1
        result.save()

        all_query = Result.objects.all()        
        return all_query

   # @action(detail=True, methods=['get'])
   # def get(self, request):
        # result = queryset.get(types = request.GET.get('id'))
        # print(request.GET.get('id'))
        # result.result += 1
        # result.save()
        #queryset[5].result +=1

        # return request.GET.get('id', '')
        #return result
# [
    # def list(self, request):
    #     return Response('listtext')

    # def retrieve(self, request, pk=None):
    #     pass

    # def update(self, request, pk=None):
    #     pass

    # def partial_update(self, request, pk=None):
    #     pass

    # def destroy(self, request, pk=None):
    #     pass
# ]
    # def storeResult(self, request):
    #     results = Result.objects.all()
    #     context = {'result': results}

    #     try:
    #         result = Result(types=request.GET['types'])
    #         result.result += 1
    #         result.save()

    #     except:
    #         result = None

    #     return render(request, '', context)


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
