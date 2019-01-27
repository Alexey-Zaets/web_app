import os


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Blog.settings')

BROKER_URL = os.environ['REDIS_URL']
BROKER_TRANSPORT_OPTIONS = {'visibility_timeout': 3600}
CELERY_RESULT_BACKEND = os.environ['REDIS_URL']
CELERY_TIMEZONE = 'Europe/Kiev'
CELERY_IMPORTS = ['blog.tasks', 'subscribers.tasks', 'analytics.tasks']
BROKER_POOL_LIMIT = 3