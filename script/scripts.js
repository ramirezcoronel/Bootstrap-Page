$('document').ready(function(){

	// Fade in iphone effect
	let iphone = $('#iphone');

	iphone.animate({
		bottom: "30px",
		opacity: 1
	}, 1000);
	// Effects when user scrolls down
	$trigger_text = 0;
	$trigger_grid = 0;
	$trigger_planBox = 0;

	$(window).scroll(function(){
		let y_Position = window.pageYOffset;
		let text_position = 350;
		let grid_position = 500;
		let planBox_position = 3700;

		// text on first section

		if(y_Position > text_position && $trigger_text == 0){

			$('.content-text > h2, .content-text > p').animate({
				opacity: 1
			}, 1000);

			$trigger_text = 1; //Make sure it doesn't run again.
		}

		// grid items 

		if(y_Position > grid_position && $trigger_grid == 0){
			let i;
			// the same effect is applied to every single grid item
			// but they occur at a different time
			for(i = 1; i < 8; i++){
				$('.item-'+i).delay(i * 200).animate({
					opacity: 1
				});
			}

			$trigger_grid = 1; //Make sure it doesn't run again.
		}

		if(y_Position > planBox_position && $trigger_planBox == 0){
			$('#popular').addClass('shadow-lg');
		}
	})

	// Scrolling functions
	
	let lastScroll = 0;

	$(window).on('scroll', function(){
		$("#modalSection").toggleClass('hide', $(window).scrollTop() > lastScroll);
		lastScroll = $(window).scrollTop();
	})
	

});