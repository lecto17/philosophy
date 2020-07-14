from django.urls import path

from rest_framework import routers

from .views import *

router = routers.DefaultRouter()
router.register('result', ResultViewSet)

urlpatterns = router.urls


# from django.urls import path
# from .views import index

# urlpatterns = [
#     path('result/, index)
# ]