from django.db import models, connection


class TagManager(models.Manager):
    def get_tags_list(self):
        cursor = connection.cursor()
        cursor.execute('select title from blog_tag')
        result_list = [i[0] for i in cursor.fetchall()]
        return result_list