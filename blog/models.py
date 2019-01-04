from django.db import models
# Create your models here.


class Author(models.Model):
	name = models.CharField('Имя', max_length=63)

	def __str__(self):
		return self.name


class Tag(models.Model):
	title = models.CharField('Тэг', max_length=63)

	def __str__(self):
		return self.title


class PostContent(models.Model):
	text = models.TextField('Текст')

	def __str__(self):
		return self.text


class Post(models.Model):
	author = models.ForeignKey(Author, on_delete=models.DO_NOTHING)
	description = models.CharField('Описание', max_length=250, blank=False)
	tags = models.ManyToManyField(Tag)
	title = models.CharField('Название', max_length=127)
	content = models.OneToOneField(PostContent,on_delete=models.CASCADE)
	image = models.ImageField('Изображение', upload_to='media/')
	pub_date = models.DateField('Дата публикации', auto_now_add=True)

	def __str__(self):
		return self.title

	@property
	def not_even(self):
		return self.id%2!=0

	def to_dict(self):
		pub_date = '{}-{}-{}'.format(
			self.pub_date.year,
			self.pub_date.month,
			self.pub_date.day
			)
		return {
			'id': self.id,
			'author': self.author.name,
			'desc': self.description,
			'title': self.title,
			'content': self.content.text,
			'pub_date': pub_date,
		}

	class Meta:
		ordering = ['-pub_date']
		managed = True