from django.urls import path, include
from rest_framework import routers
from .views import ResultViewSet, PostViewSet, CommentViewSet, UserViewSet

router = routers.DefaultRouter()
router.register('result', ResultViewSet, 'Result')
router.register('post', PostViewSet)
router.register('comment', CommentViewSet)
router.register('user', UserViewSet)

urlpatterns = [
<<<<<<< HEAD
    path('', include(router.urls)),
    #path('/result/<id>/', include(router.urls))
=======
    path('', include(router.urls))
>>>>>>> 4150eca56efd71fc0892e7a37c20e9f4e5c9a4d6
]