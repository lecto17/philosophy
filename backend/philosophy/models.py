from django.db import models

# Create your models here.
class Result(models.Model):
    objects = models.Manager()
    types = models.CharField(max_length=10)
    result = models.IntegerField()

    def __str__(self):
        return self.types

    # class Meta:
    #     ordering = ['aris']
        
class User(models.Model):
    objects = models.Manager()
    userid = models.CharField(max_length=20, primary_key=True)
    pw = models.CharField(max_length=20)

    def __str__(self):
        return self.userid

class DiscussPost(models.Model):
    objects = models.Manager()
    userid = models.ForeignKey('User', on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    content = models.CharField(max_length=1000)
    date = models.DateField()

    def __str__(self):
        return self.title
    
class DiscussComment(models.Model):
    objects = models.Manager()
    userid = models.ForeignKey('User', on_delete=models.CASCADE)
    postid = models.ForeignKey('DiscussPost', on_delete=models.CASCADE)
    content = models.CharField(max_length=300)
    date = models.DateField()

    def __str__(self):
        return self.userid