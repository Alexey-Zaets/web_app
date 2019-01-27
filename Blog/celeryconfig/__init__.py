try:
    from .celery_production import *
except:
    from .celery_local import *