$(document).ready(function(){
	$('#magician').mouseenter(function(){
		$(this).fadeTo('fast', 0.5);
	});
	$('#magician').mouseleave(function(){
		$(this).fadeTo('fast', 1);
	});

	$('#magician').click(function(){
		$('#cards').empty();
		$('#cards').append("<h3>Your card has disappered!!! Don't belive me? Try to find it!!!</h3><br><img class='img-responsive' src='set2.jpg'/><br><img id='magician' class='img-responsive' src='magician.jpg'/>");
	});
	

});