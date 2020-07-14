from django.db import models

# Create your models here.
class Result(models.Model):
    objects = models.Manager()
    aris = models.IntegerField()
    stoic = models.IntegerField()
    epic = models.IntegerField()
    skep = models.IntegerField()
    cyr = models.IntegerField()
    

    def __int_(self):
        return self.aris

    class Meta:
        ordering = ['aris']