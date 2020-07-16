from django.urls import path, include
from rest_framework import routers
from .views import ResultViewSet, PostViewSet, CommentViewSet, UserViewSet

router = routers.DefaultRouter()
router.register('result', ResultViewSet)
router.register('post', PostViewSet)
router.register('comment', CommentViewSet)
router.register('user', UserViewSet)

urlpatterns = [
    path('', include(router.urls))
]