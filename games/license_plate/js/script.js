function init() {
	var canvas = document.getElementById("my_canvas");
	var stage = new createjs.Stage(canvas);
	
	// Create license plate number
	var license = createLicense();
	stage.addChild(license);
	license.x = Math.random()*(canvas.width-100);
	license.y = Math.random()*(canvas.height-30);
	stage.update();

	// Remove license plate after 3 seconds
	setTimeout(function(){
		stage.removeAllChildren();
		stage.update();
		
		// Test recall
		var f = document.createElement("form");
		f.setAttribute('method', 'post');
		stage.addChild(f);
		stage.update();
	}, 1000);
	
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
	return new createjs.Text(first + letters + nums, "bold 30px Times", "white");
}

