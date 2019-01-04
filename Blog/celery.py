from celery import Celery
from Blog import celeryconfig


app = Celery()
app.config_from_object(celeryconfig)