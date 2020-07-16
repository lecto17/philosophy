from rest_framework.serializers import ModelSerializer
from .models import *


class ResultSerializer(ModelSerializer):
    class Meta:
        model = Result
        fields = ['types','result']

class DiscussPostSerializer(ModelSerializer):
    class Meta:
        model = DiscussPost
        fields = [ 'userid', 'title', 'content', 'date']

class DiscussCommentSerializer(ModelSerializer):
    class Meta:
        model = DiscussComment
        fields = ['userid', 'content', 'date']

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = [ 'userid', 'pw']
