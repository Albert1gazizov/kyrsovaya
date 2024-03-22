from django.urls import path
from yslygi.views import index

urlpatterns = [    
        path('', index, name = 'index'), 
    ]
