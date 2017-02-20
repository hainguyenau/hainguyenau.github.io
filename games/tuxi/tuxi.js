$(document).ready(function() {
	var d = {
	1: 'bao',
	2: 'bua',
	3: 'keo'
}
	var x = Math.floor(Math.random()*3)+1;
	var anh = d[x];
	
	console.log(anh);//check my random variable
	
	//Make images fade when hover
	$('#bao, #bua, #keo').mouseenter(function(){
		$(this).fadeTo('fast', 0.5)
	});
	$('#bao, #bua, #keo').mouseleave(function(){
		$(this).fadeTo('fast', 1)
	});
	
	// Play again button
	$('button').click(function() {
    location.reload();
	});
	
	// Bouncing images
	$('img').effect('bounce',{times:3},1000);
	

	
	$('#bao').click(function() {
		$(this).fadeOut('slow', function(){
			$('.result').empty();
			$('.em img').remove();
			$('.anh img').remove();
			$('.em').append('<img class="img-responsive" src="bao.png"/>');
		
			if (anh=='bao') {

				$('.anh').append('<img class="img-responsive" src="bao.png"/>');
				$('.result').append('<h3>DRAW!!!!!!</h3>');
				$('.result').append("<img class='img-responsive' src='hue.jpg'/>");
				$('.result').effect('bounce',{times:3},1000);
			}
			
			if (anh=='bua') {

				$('.anh').append('<img class="img-responsive" src="bua.png"/>');
				$('.result').append('<h3>YOU WIN!!!!!!</h3>');
				$('.result').append("<img class='img-responsive'src='thua.jpg'/>");
				$('.result').effect('bounce',{times:3},1000);
				}
			if (anh=='keo') {

				$('.anh').append('<img class="img-responsive" src="keo.png"/>');
				$('.result').append('<h3>YOU LOSE!!!</h3>');
				$('.result').append("<img class='img-responsive' src='thang.jpg'/>");
				$('.result').effect('bounce',{times:3},1000);

			}
		})
	});
	
	$('#bua').click(function() {
		$(this).fadeOut('slow', function(){
			$('.result').empty();
			$('.em img').remove();
			$('.anh img').remove();
			$('.em').append('<img class="img-responsive" src="bua.png"/>');
			if (anh=='bua') {
				$('.anh').append('<img class="img-responsive" src="bua.png"/>');
				$('.result').append('<h3>DRAW!!!!!!</h3>');
				$('.result').append("<img class='img-responsive' src='hue.jpg'/>");
				$('.result').effect('bounce',{times:3},1000);
				}
			if (anh=='keo') {
				$('.anh').append('<img class="img-responsive" src="keo.png"/>');
				$('.result').append('<h3>YOU WIN!!!!!!</h3>');
				$('.result').append("<img class='img-responsive' src='thua.jpg'/>");
				$('.result').effect('bounce',{times:3},1000);
				}
			if (anh=='bao') {
				$('.anh').append('<img class="img-responsive" src="bao.png"/>');
				$('.result').append('<h3>YOU LOSE!!!</h3>');
				$('.result').append("<img class='img-responsive' src='thang.jpg'/>");
				$('.result').effect('bounce',{times:3},1000);
			}
		})
	});
	
	$('#keo').click(function() {
		$(this).fadeOut('slow', function(){
			$('.result').empty();
			$('.em img').remove();
			$('.anh img').remove();
			$('.em').append('<img class="img-responsive" src="keo.png"/>');
			if (anh=='keo') {
				$('.anh').append('<img class="img-responsive" src="keo.png"/>');
				$('.result').append('<h3>DRAW!!!!!!</h3>');
				$('.result').append("<img class='img-responsive' src='hue.jpg'/>");
				$('.result').effect('bounce',{times:3},1000);
				}
			if (anh=='bao') {
				$('.anh').append('<img class="img-responsive" src="bao.png"/>');
				$('.result').append('<h3>YOU WIN!!!!!!</h3>');
				$('.result').append("<img class='img-responsive' src='thua.jpg'/>");
				$('.result').effect('bounce',{times:3},1000);
				}
			if (anh=='bua') {
				$('.anh').append('<img class="img-responsive" src="bua.png"/>');
				$('.result').append('<h3>YOU LOSE!!!</h3>');
				$('.result').append("<img class='img-responsive' src='thang.jpg'/>");
				$('.result').effect('bounce',{times:3},1000);
			}
		})
	});

});

// Choose bua & keo don't give result!!!

