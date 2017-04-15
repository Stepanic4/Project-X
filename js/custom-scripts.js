$(document).ready(function() {

	$('.tabs-controls li').click(function() {

		if (!$(this).hasClass('active')) {

			var currentIndex = $(this).index();

			$(this).siblings().removeClass('active');
			$(this).addClass('active');

			$(this).parent().siblings('.tabs-items').find('li').slideUp(200);
			$(this).parent().siblings('.tabs-items').find('li').eq(currentIndex).slideDown(200);

		}

	});

	 $('aside .fa-arrow-left').click(function() {
		$('aside').toggleClass('active');
	});

});