from django.db import models

# Create your models here.

class Message (models.Model):
    """
    Model to store messages.
    """
    name = models.CharField(max_length=100) 
    email = models.EmailField()
    message = models.TextField()  
    created_at = models.DateTimeField(auto_now_add=True)  

    def __str__(self):
        return f"{self.message[:50]} - {self.name} ({self.created_at})"  