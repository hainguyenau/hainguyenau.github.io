$(document).ready(function(){
	// Variables
	var h = $('#myCanvas').height();
	var w = $('#myCanvas').width();

	
	$('#no').click(function(){
		$('#whoosh')[0].play();
		var x = (Math.random()-0.5)*(0.8*w);
		var y = Math.random()*(0.8*h);
		
		
		var next_left = x.toString()+ 'px';
		var next_top = y.toString()+ 'px';
		

		console.log(next_left, next_top);
		$(this).animate({left: next_left, top: next_top});

	});
	
	$('#yes').click(function() {
		$('#bell')[0].play();
		$('#myCanvas').empty();
		$('#myCanvas').fadeOut('slow');
		$('#myCanvas').fadeIn('slow',function(){
			$('#applause')[0].play();
			$('#myCanvas').append("<img class='img-responsive' src='heart.png'/>");
			
		});
		
		
		
		
	});
});


// Must add css position in order to animate left/right/up/down