var license;

function init() {
	var canvas = document.getElementById("my_canvas");
	var stage = new createjs.Stage(canvas);
	
	// Create license plate number
	license = createLicense();
	var licenseGraphic = new createjs.Text(first + letters + nums, "bold 40px Times", "white");
	stage.addChild(licenseGraphic);
	licenseGraphic.x = Math.random()*(canvas.width-100);
	licenseGraphic.y = Math.random()*(canvas.height-30);
	stage.update();

	// Remove license plate after 3 seconds
	setTimeout(function(){
		stage.removeChild(licenseGraphic);
		stage.update();
	}, 2000);
	

}

function createLicense() {
	first = (Math.floor(Math.random()*9)).toString();
	dict = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	letters = '';
	nums = ''	
	for (i=0; i<3; i++) {
		tempLetter = dict[Math.floor(Math.random()*26)];
		tempNum = (Math.floor(Math.random()*9)).toString();
		letters += tempLetter;
		nums += tempNum;
		console.log(i, tempLetter, tempNum);
	}
	return first + letters + nums;

}

function show_result(){
	var answer = document.getElementById("input").value;
	alert ('Your answer: ' + answer + '\ntrue answer: '+ license);
	if (answer.toUpperCase() === license) {
		alert('correct');
	} else {
		alert('wrong');
	}

}

