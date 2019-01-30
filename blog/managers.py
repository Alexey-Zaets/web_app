import random
from django.db import models, connection


class TagManager(models.Manager):
    def get_tags_list(self):
        cursor = connection.cursor()
        cursor.execute('select title from blog_tag;')
        result_list = [i[0] for i in cursor.fetchall()]
        return result_list

class AuthorManager(models.Manager):
    def get_authors_list(self):
        cursor = connection.cursor()
        cursor.execute('select name from blog_author;')
        result_list = [i[0] for i in cursor.fetchall()]
        return result_list


class CitationManager(models.Manager):
    def get_random_citation(self):
        cursor = connection.cursor()
        cursor.execute('select citation from blog_citation;')
        result_list = [i[0] for i in cursor.fetchall()]
        return random.choice(result_list)