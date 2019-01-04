import os


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Blog.settings')

BROKER_URL = 'redis://127.0.0.1:6379/0'
BROKER_TRANSPORT_OPTIONS = {'visibility_timeout': 3600}
CELERY_RESULT_BACKEND = 'redis://127.0.0.1:6379/0'
CELERY_TIMEZONE = 'Europe/Kiev'
CELERY_IMPORTS = ['blog.tasks', 'subscribers.tasks']