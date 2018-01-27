$(document).ready(function(){
	$('img').click(function(){
		var h = $('.wrapper').height();
		var w = $('.wrapper').width();
		var button_h = $('img').height();
		var button_w = $('img').width();
		var x = Math.random()*(0.8*(w-button_w/2));
		var y = Math.random()*(0.8*(h-button_h/2));
		
		var next_top = y.toString()+ 'px';
		var next_left = x.toString()+ 'px';
		

		// Animate only works when you specify top, left in css
		$('img').animate({left: next_left, top: next_top}, function(){
			$('img').empty();
			$('img').toggleClass('angry');
			
		});
		
	});
});

// a div won't move!!!!