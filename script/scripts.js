$('document').ready(function(){

	// Fade in iphone effect
	let iphone = $('#iphone');

	iphone.animate({
		bottom: "30px",
		opacity: 1
	}, 1000);

	// Text appear when user scrolls down

	$trigger_text = 0;
	$trigger_grid = 0;

	$(window).scroll(function(){
		let y_Position = window.pageYOffset;
		let text_position = 350;
		let grid_position = 500;
		if(y_Position > text_position && $trigger_text == 0){

			$('.content-text > h2, .content-text > p').animate({
				opacity: 1
			}, 1000);

			$trigger_text = 1; //Make sure it doesn't run again.
		}
		if(y_Position > grid_position && $trigger_grid == 0){
			let i;
			console.log("hola");
			$(".item-1").animate({
  					opacity:1
  			}, 1000);
  			$(".item-2").animate({
  					opacity:1
  			}, 1000);
  			$(".item-3").animate({
  					opacity:1
  			}, 100);
  			$(".item-4").animate({
  					opacity:1
  			}, 100);
  			$(".item-5").animate({
  					opacity:1
  			}, 1000);
  			$(".item-6").animate({
  					opacity:1
  			}, 1000);
  			$(".item-7").animate({
  					opacity:1
  			}, 1000);

			$trigger_grid = 1; //Make sure it doesn't run again.
		}


	})
});