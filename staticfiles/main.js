var permission = true

$(document).on('click', '.item', function() {
	var post_id = $(this).data('id');
	$('.container').load('/post/' + post_id + '/');
	permission = false;
});

/*$('.item').on('mouseenter', function(event) {
	$(event.currentTarget).addClass('shadow');
}).on('mouseleave', function(event) {
	$(event.currentTarget).removeClass('shadow');
});*/

$(document).on('click', '.right', function() {
	$('.container').load('/about/');
	permission = false;
});

$(document).ready(function() {
	var page = 2;
	var url = $('.pagination').data('url');
	var num_pages = $('.pagination').data('numpages');
	$(window).on('scroll', function() {
		if (page<=num_pages && permission) {
			if($(window).scrollTop() + $(window).height() >= $(document).height()) {
				$.get(url, {'page': page}, function(loaded) {
					$('.container').append(loaded);
					page++;
				});
			};
		};
	});
});