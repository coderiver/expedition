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

	// promo switcher toggle
		
		function switcher(){
			var top = $(".header").offset().top;
			if (top > 5) {
				$(".js-promo-switcher").addClass('is-hidden');
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
				news.addClass('is-fixed');
			}
			if ($(window).scrollTop() < (top2 - 55)) {
				$(".js-categories").removeClass('is-fixed');
				news.removeClass('is-fixed');
			}
			if ($(window).scrollTop() >= (top - 206)) {
				$(".js-fixedtop").addClass('is-scrolled').css('top', (top - 206));
			}
			else{
				$(".js-fixedtop").removeClass('is-scrolled').css('top', 'auto');
			}

		}
		sticky();


		$(window).scroll(function(){
    	   	sticky();
    	   	switcher();
    	});

		$(document).click(function(){
			$(".js-bounce").hide();		
		});

		$(window).resize(function(){
			promo();
		});

});