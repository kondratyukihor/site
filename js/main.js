$(document).ready(function(){
	// target__link
	$('.js-anchor').on("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top -77
		}, 650);
		e.preventDefault();
		return false;
	});


	// responsive menu
	$('.js-header-toggle').click(function(){
		$(this).toggleClass('header__toggle--active');
		$('.header__nav').toggleClass('header__nav--opened');
	});


	// responsive menu
	$('.nav__link').click(function(){
		$('.js-header-toggle').removeClass('header__toggle--active');
		$('.header__nav').removeClass('header__nav--opened');
	});


	// SLICK
	$('.js-reviews-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});