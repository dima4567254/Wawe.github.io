$(function(){

    	$(".menu a").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

   
    
    $('.slider-blog__items').slick({
        dots: true,/*true*/
        arrows: false,
    })

    $('.menu__btn, .menu a').on('click', function (){
        $('.menu__list').toggleClass('menu__list--active');
        
        /*$('.header__logo').toggleClass('menu__list--active');
        $('.intro__btn').toggleClass('menu__list--active');*/
    });
     var mixer = mixitup('.gallery__content'); /*intro*/ 
}); 

/*
$(document).ready(function() {
    alert(jQuery.fn.jquery);
});*/