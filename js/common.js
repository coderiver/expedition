head.ready(function() {
	
	// promo

		function promo(){
			var height = $(window).height();
			$(".js-promo").css('height', height);
		}
		promo();

		$(".js-promo-points").hide();
		$(".js-promo-switcher").on('click', function(){
			if ($(this).hasClass('is-open')) {
				$(this).text('Показать объекты').removeClass('is-open');
				$(".js-promo-points").hide();
			}
			else{
				$(this).text('скрыть объекты').addClass('is-open');
				$(".js-promo-points").show();
			}
		});	

		$(".js-bounce").hide();
		$(".js-point").on('click', function(event){
			$(".js-bounce").hide();
			$(this).find(".js-bounce").show( "bounce", { times: 2, distance: 20 }, "slow" );
			event.stopPropagation();
			return false;
		});

		$(".js-point").hover(
			function(){},
			function(){
				$(".js-bounce").hide();
			}
		);

	// promo switcher toggle
		
		function switcher(){
			if ($(window).scrollTop() > 5) {
				$(".js-promo-switcher").addClass('is-hidden').text('Показать объекты').removeClass('is-open');
				$(".js-promo-points").hide();
			}
			else{
				$(".js-promo-switcher").removeClass('is-hidden');
			}
		}	
		switcher();

	// sticky elements

		function sticky(){
			var news = $(".js-news");
			var top = news.offset().top;
			var top2 = $(".container_index").offset().top;

			if ($(window).scrollTop() >= (top - 55)) {
				$(".js-categories").addClass('is-fixed');
				//news.addClass('is-fixed');
			}
			if ($(window).scrollTop() < (top2 - 55)) {
				$(".js-categories").removeClass('is-fixed');
				//news.removeClass('is-fixed');
			}
			if ($(window).scrollTop() >= (top - 206)) {
				$(".js-fixedtop").addClass('is-scrolled').css('top', (top - 206));
			}
			else{
				$(".js-fixedtop").removeClass('is-scrolled').css('top', 'auto');
			}

		}
		if ($(".js-news").length) {
			sticky();
		};
		

	// scrolltop

		$(".scrolltop").on('click', function(){
			$('html, body').animate({
        	    scrollTop: 0
        	}, 500);
        	return false; 
		});

	// yandex map
    	
    	ymaps.ready(function () {
    		var myMap = new ymaps.Map('YMapsID', {
    		    center: [55.733835, 37.588227],
    		    zoom: 12,
    		    controls: []
    		}),
	
        	// Создаем метку с помощью вспомогательного класса.
        	myPlacemark1 = new ymaps.Placemark([55.733835, 37.588227], {
        	    // Свойства.
        	    // Содержимое иконки, балуна и хинта.
        	    iconContent: '1',
        	    balloonContent: 'Балун',
        	    hintContent: 'Стандартный значок метки'
        	}, {
        	    // Опции.
        	    // Стандартная фиолетовая иконка.
        	    preset: 'twirl#violetIcon'
        	});
	
     		myMap.geoObjects
        		.add(myPlacemark1)

    	});

    // popup init
    
    	$(".js-overlay").hide();
    	//$(".js-popup").hide();	

    	$(".js-popup-map-btn").on('click', function(event){
    		$(".js-overlay").show();
    		$(".js-popup-map").addClass('is-open');
    		$(".out").addClass('is-hidden');
    		event.stopPropagation();
			return false;
    	});
    	$(".js-popup-feedback-btn").on('click', function(event){
    		$(".js-overlay").show();
    		$(".js-popup-feedback").addClass('is-open');
    		$(".out").addClass('is-hidden');
    		event.stopPropagation();
			return false;
    	});

    	$(".js-popup-close").on('click', function(){
    		$(".js-overlay").hide();
    		$(".js-popup").removeClass('is-open');
    		$(".out").removeClass('is-hidden');
    	});

    	$(".js-popup").on('click', function(event){
    		event.stopPropagation();
    	});

    // slick
    	
    	$('.js-slider').slick({
		  centerMode: true,
		  centerPadding: '0px',
		  slidesToShow: 3,
		  arrows: false,
		  slidesToScroll: 1
		});	


		$(window).scroll(function(){
    	   	if ($(".js-news").length) {
				sticky();
			};
    	   	switcher();
    	});

		$(document).click(function(){
			$(".js-bounce").hide();
			$(".js-overlay").hide();
    		$(".js-popup").removeClass('is-open');
    		$(".out").removeClass('is-hidden');	
		});

		$(window).resize(function(){
			promo();
		});

});