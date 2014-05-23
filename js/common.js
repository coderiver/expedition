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
			var w_top = $(window).scrollTop();

			if (w_top >= (top - 55)) {
				$(".js-categories").addClass('is-fixed');
			}
			if (w_top < (top2 - 55)) {
				$(".js-categories").removeClass('is-fixed');
			}
			if (w_top >= (top - 206)) {
				$(".js-fixedtop").addClass('is-scrolled').css('top', (top - 206));
			}
			else{
				$(".js-fixedtop").removeClass('is-scrolled').css('top', 'initial');
			}
		}
		if ($(".js-news").length) {
			sticky();
		};

		function sticky_inner(){
			var item = $(".js-categories2");
			if ($(window).scrollTop() >= 151) {
				$(".js-categories2").addClass('is-fixed2');
			}
			else{
				$(".js-categories2").removeClass('is-fixed2');
			}
		}
		if ($(".js-categories2").length) {
			sticky_inner();
		};

		function submenu(){
			var top = $(".js-submenu-wrap").offset().top;
			var submenu = $(".js-submenu");
			var margin = submenu.outerWidth();
			if ($(window).scrollTop() >= (top - 73)) {
				submenu.addClass('is-fixed').css('margin-left', (-margin)*0.5);
			}
			else{
				submenu.removeClass('is-fixed').css('margin-left', 'auto');
			}
		}
		if ($(".js-submenu-wrap").length) {
			submenu();
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

    	function popups_init(){
    		$(".js-popup-map-btn").on('click', function(event){
    			var w_top = $(window).scrollTop();

    			$(".js-overlay").show();
    			$(".js-popup-map").addClass('is-open');
    			$(".out").addClass('is-hidden');
    			$(".js-fixedtop").addClass('is-scrolled').css('top', w_top);
    			event.stopPropagation();
				return false;
    		});
    		$(".js-popup-feedback-btn").on('click', function(event){
    			var w_top = $(window).scrollTop();
    			$(".js-overlay").show();
    			$(".js-popup-feedback").addClass('is-open');
    			$(".out").addClass('is-hidden');
    			$(".js-fixedtop").addClass('is-scrolled').css('top', w_top);
    			event.stopPropagation();
				return false;
    		});
    	}
    	popups_init();

    	function comm(){
    		var top = ($(window).scrollTop() + 100);
    		$(".js-popup-comment-btn").on('click', function(event){
    			$(".js-overlay").show();
    			$(".js-popup-comment").addClass('is-open').css('top', top);
    			$(".out").addClass('is-hidden');
    			event.stopPropagation();
				return false;

    		});
    	}
    	comm();
    	

    	$(".js-popup-close").on('click', function(){
    		$(".js-overlay").hide();
    		$(".js-popup").removeClass('is-open');
    		$(".out").removeClass('is-hidden');
    		$(".js-popup-comment").removeClass('is-open').css('top', 170);
    	});

    	$(".js-popup").on('click', function(event){
    		event.stopPropagation();
    	});

    // slick
    	
    	$('.js-slider').slick({
		  centerMode: true,
		  centerPadding: '0px',
		  slidesToShow: 3,
		  slidesToScroll: 1
		});	

    // cycle reinit
    //$('.cycle-slideshow').cycle('reinit');

    	previous = $(window).width();
    	function sr(){
    		var current = $(window).width();
    		var slider = $(".js-news .cycle-slideshow");
    		supernomer = (1280-current)*(1280-previous);
    		//console.log(supernomer+'==='+previous+'==='+current);
    		if(supernomer<0){
    			slider.cycle('reinit');
    			//previous = current;
    			setTimeout((previous = current), 2000);
    		}

    	}	
    	if ($(".js-news").length) {
			sr();
    	}

    // fancybox

    	if ($(".fancybox").length) {
    	    $(".fancybox").fancybox({
    	        openEffect  : 'none',
    	        closeEffect : 'none',
    	        nextEffect : 'fade',
    	        prevEffect : 'fade',
    	        padding : 60,
    	        scrolling: 'no',
    	        autoResize: true,
    	        helpers: {
    	          overlay: {
    	            locked: false
    	          }
    	        }
    	    });
    	};

		$(window).scroll(function(){
    	   	if ($(".js-news").length) {
				sticky();
			};
			if ($(".comm").length) {
				comm();
			};
			if ($(".js-categories2").length) {
				sticky_inner();
			};
			if ($(".js-submenu-wrap").length) {
				submenu();
			};
    	   	switcher();
    	   	popups_init();
    	});

		$(document).click(function(){
			$(".js-bounce").hide();
			$(".js-overlay").hide();
    		$(".js-popup").removeClass('is-open');
    		$(".out").removeClass('is-hidden');
		});

		$(window).resize(function(){
			promo();
			if ($(".js-news").length) {
				sr();
    		}
		});

});