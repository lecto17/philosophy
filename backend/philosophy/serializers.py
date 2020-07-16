from rest_framework.serializers import ModelSerializer
from .models import Result, Post, Comment, User

class ResultSerializer(ModelSerializer):
    class Meta:
        model = Result
        fields = ['types','result']

class PostSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = ['userid', 'title', 'content', 'date']

class CommentSerializer(ModelSerializer):
    class Meta:
        model = Comment
        fields = ['userid', 'postid', 'content', 'date']

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['userid', 'pw']