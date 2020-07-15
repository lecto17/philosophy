from django.contrib import admin
from . import models

# Register your models here.
admin.site.register(models.Result)
admin.site.register(models.User)
admin.site.register(models.DiscussPost)
admin.site.register(models.DiscussComment)