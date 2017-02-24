$(document).ready(function(){
	// Variables
	var h = $('#myCanvas').height();
	var w = $('#myCanvas').width();

	
	$('#no').click(function(){
		var x = (Math.random()-0.5)*(0.8*w);
		var y = Math.random()*(0.8*h);
		
		
		var next_left = x.toString()+ 'px';
		var next_top = y.toString()+ 'px';
		

		console.log(next_left, next_top);
		$(this).animate({left: next_left, top: next_top});

	});
	
	$('#yes').click(function() {
		$('#myCanvas').empty();
		$('#myCanvas').fadeOut('slow');
		$('#myCanvas').fadeIn('slow',function(){
			$('#myCanvas').append("<h2>YOU HAVE MADE A RIGHT CHOICE!!! CONGRATULATIONS!!!</h2>");
			
		});
		
		
		
		
	});
});


// Must add css position in order to animate left/right/up/down