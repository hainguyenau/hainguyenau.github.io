$(document).ready(function() {
	var d = {
	1: 'bao',
	2: 'bua',
	3: 'keo'
}
	var x = Math.floor(Math.random()*3)+1;
	var anh = d[x];


	alert('QUÁNH TÙ XÌ RA CÁI GÌ RA CÁI NÀY. EM RA CÁI GÌ?')
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
	

	
	$('#bao').click(function() {

		alert('EM CHỌN BAO');
		$('.em img').remove();
		$('.anh img').remove();
		$('.em').css('height','200px');
		$('.em').append('<img class="img-responsive" src="bao.png"/>');
	
		if (anh=='bao') {
			alert('HUỀ, ANH CŨNG RA BAO LUÔN');
			$('.anh').append('<img class="img-responsive" src="bao.png"/>');
			$('.result').append('HUỀ!!!');
		}
		if (anh=='bua') {
			alert('EM THẮNG RỒI, ANH RA BÚA');
			$('.anh').append('<img class="img-responsive" src="bua.png"/>');
			$('.result').append('EM THẮNG!!!');
			}
		if (anh=='keo') {
		alert('EM THUA RỒI. ANH RA KÉO');
			$('.anh').append('<img class="img-responsive" src="keo.png"/>');
			$('.result').append('EM THUA!!!');
		}

	});
	
	$('#bua').click(function() {

		alert('EM CHỌN BÚA');
		$('.em img').remove();
		$('.anh img').remove();
		$('.em').append('<img class="img-responsive" src="bua.png"/>');
		if (anh=='bua') {
			alert('HUỀ. ANH RA BÚA');
			$('.anh').append('<img class="img-responsive" src="bua.png"/>');
			$('.result').append('HUỀ!!!');
			}
		if (anh=='keo') {
			alert('EM THẮNG. ANH RA KÉO');
			$('.anh').append('<img class="img-responsive" src="keo.png"/>');
			$('.result').append('EM THẮNG!!!');
			}
		if (anh=='bao') {
			alert('EM THUA. ANH RA BAO');
			$('.anh').append('<img class="img-responsive" src="bao.png"/>');
			$('.result').append('EM THUA!!!');
			}
	});
	$('#keo').click(function() {

		alert('EM CHỌN KÉO');
		$('.em img').remove();
		$('.anh img').remove();
		$('.em').append('<img class="img-responsive" src="keo.png"/>');
		if (anh=='keo') {
			alert('HUỀ. ANH RA KÉO LUÔN');
			$('.anh').append('<img class="img-responsive" src="keo.png"/>');
			$('.result').append('HUỀ!!!');
			}
		if (anh=='bao') {
			alert('EM THẮNG. ANH RA BAO.');
			$('.anh').append('<img class="img-responsive" src="bao.png"/>');
			$('.result').append('EM THẮNG!!!');
			}
		if (anh=='bua') {
			alert('EM THUA. ANH RA BÚA');;
			$('.anh').append('<img class="img-responsive" src="bua.png"/>');
			$('.result').append('EM THUA!!!');
			}
	});


	});

// Choose bua & keo don't give result!!!

