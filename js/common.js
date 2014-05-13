head.ready(function() {
	
	// promo

		function promo(){
			var height = $(window).height();
			$(".js-promo").css('height', height);
		}
		promo();

		








		$(window).resize(function(){
			promo();
		});

});