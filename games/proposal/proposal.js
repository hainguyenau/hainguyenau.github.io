$(document).ready(function(){
	// Variables
	var h = $('#myCanvas').height();
	var w = $('#myCanvas').width();
	// var x = Math.floor(Math.random()*w);
	// var y = Math.floor(Math.random()*h);
	
	$('#no').click(function(){
		$(this).animate({right:'-=5px'});
	});

});

var rand_pos = function(){
	
};
// Must add css position in order to animate left/right/up/down