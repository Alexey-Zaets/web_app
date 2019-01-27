web: gunicorn Blog.wsgi --log-file -
worker: celery -A Blog worker -B -l info
