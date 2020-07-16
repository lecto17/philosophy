from django.urls import path, include

from rest_framework import routers

from .views import *

router = routers.DefaultRouter()
router.register('result', ResultViewSet)
router.register('discuss/post', DiscussPostViewSet)
router.register('discuss/comment', DiscussCommentViewSet)
router.register('user', UserViewSet)

urlpatterns = router.urls


# from django.urls import path
# from .views import index

# urlpatterns = [
#     path('result/, index)
# ]
