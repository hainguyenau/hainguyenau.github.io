$(document).ready(function(){
	$('#magician').mouseenter(function(){
		$(this).fadeTo('fast', 0.5);
	});
	$('#magician').mouseleave(function(){
		$(this).fadeTo('fast', 1);
	});

	$('#magician').click(function(){
		$('#mysterious')[0].play();
		$(this).fadeOut('slow', function(){
			$(this).fadeIn('slow', function(){
				$('#cards').empty();
				$('#cards').append("<h3>Your card has vanished!!!<br>Don't believe me? Try to find it!!!</h3><br><img class='img-responsive sets' src='set2.jpg'/><br><img id='magician' class='img-responsive' src='magician.jpg'/><br>");
			})
		});
	});
	
});