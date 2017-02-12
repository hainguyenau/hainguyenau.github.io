$(document).ready(function() {
	var d = {
	1: 'bao',
	2: 'bua',
	3: 'keo'
}
	var x = Math.floor(Math.random()*3)+1;
	var anh = d[x];

	alert('QUÁNH TÙ XÌ RA CÁI GÌ RA CÁI NÀY. EM RA CÁI NÀO?')
	console.log(anh);//check my random variable
	
	$('#bao').click(function() {
		alert('EM CHỌN BAO');
		$('.em img').remove();
		$('.em').css('height','400px');
		$('.em').append('<img src="bao.png"/>');
		
		if (anh=='bao') {
			alert('HUỀ, ANH CŨNG RA BAO LUÔN');
			$('.anh img').remove();
			$('.anh').append('<img src="bao.png"/>');
			$('.result').append('<br/><h2>HUỀ!!!</h2>');
		}
		if (anh=='bua') {
			alert('EM THẮNG RỒI, ANH RA BÚA');
			$('.anh img').remove();
			$('.anh').append('<img src="bua.png"/>');
			$('.result').append('<br/><h2>EM THẮNG!!!</h2>');
			}
		if (anh=='keo') {
		alert('EM THUA RỒI. ANH RA KÉO');
			$('.anh img').remove();
			$('.anh').append('<img src="keo.png"/>'); 
			$('.result').append('<br/><h2>EM THUA!!!</h2>');
		}
		
	}) 
	$('#bua').click(function() {
		alert('EM CHỌN BÚA');
		$('.em img').remove();
		$('.em').append('<img src="bua.png"/>'); 
		if (anh=='bua') {
			alert('HUỀ. ANH RA BÚA');
			$('.anh img').remove();
			$('.anh').append('<img src="bua.png"/>');
			}
		if (anh=='keo') {
			alert('EM THẮNG. ANH RA KÉO');
			$('.anh img').remove();
			$('.anh').append('<img src="keo.png"/>');
			}
		if (anh=='bao') {
			alert('EM THUA. ANH RA BAO');
			$('.anh img').remove();
			$('.anh').append('<img src="bao.png"/>');
			}
	})
	$('#keo').click(function() {
		alert('EM CHỌN KÉO');
		$('.em img').remove();
		$('.em').append('<img src="keo.png"/>'); 
		if (anh=='keo') {
			alert('HUỀ. ANH RA KÉO LUÔN');
			$('.anh img').remove();
			$('.anh').append('<img src="keo.png"/>');
			}
		if (anh=='bao') {
			alert('EM THẮNG. ANH RA BAO.');
			$('.anh img').remove();
			$('.anh').append('<img src="bao.png"/>');
			}
		if (anh=='bua') {
			alert('EM THUA. ANH RA BÚA');
			$('.anh img').remove();
			$('.anh').append('<img src="bua.png"/>');
			}
	})


	});


	
