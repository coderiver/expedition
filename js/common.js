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

	// sticky elements

		function sticky(){
			var news = $(".container_index").offset().top;
			console.log(news);

			if (news <= 206) {
				$(".js-news").addClass('is-fixed');
			};

		}
		sticky();


		$(window).scroll(function(){
    	   	sticky();
    	});

		$(document).click(function(){
			$(".js-bounce").hide();		
		});

		$(window).resize(function(){
			promo();
		});

});