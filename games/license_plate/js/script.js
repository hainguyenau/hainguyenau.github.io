var license;
var score = 0;
var time = 5000;
var rectWidth = 60;
var rectHeight = 10;
var level = 1;
function init() {
	var canvas = document.getElementById("my_canvas");
	var stage = new createjs.Stage(canvas);
	
	// show score
	var ScoreText = new createjs.Text("Score: "+ score, "bold 20px Times", "white");
	ScoreText.x = 10;
	ScoreText.y = 10;
	stage.addChild(ScoreText);
	stage.update();
	
	// show level
	var LevelText = new createjs.Text("Level: " + level, "bold 20px Times", "white");
	LevelText.x = 400;
	LevelText.y = 10;
	stage.addChild(LevelText);
	stage.update()
	
	// Create license plate number
	license = createLicense();
	var licenseGraphic = new createjs.Text(first + letters + nums, "bold 30px Times", "black");
	licenseGraphic.shadow = new createjs.Shadow('#000000', 0.2, 0.7, 2);
	var plate = new createjs.Shape();
	plate.graphics.beginStroke("black");
	plate.graphics.beginFill("white").drawRoundRect(-15, -10, 150, rectWidth, rectHeight);

	
	setTimeout(function(){
		stage.addChild(plate);
		stage.addChild(licenseGraphic);
		
		licenseGraphic.x = Math.random()*(canvas.width-100-rectWidth);
		licenseGraphic.y = Math.random()*(canvas.height-100-rectHeight);
		plate.x = licenseGraphic.x;
		plate.y = licenseGraphic.y;
		stage.update();
	},3000);
	

	// Remove license plate 2 seconds after license is created
	setTimeout(function(){
		stage.removeChild(licenseGraphic);
		stage.removeChild(plate);
		stage.update();
	}, 3000+time);
	
	// Shorten flashing speed if score is a multiple of 10
	if (score%10==0 && score!=0){
		time = 0.7*time;
		alert('Level up. Speed increases.');
		level += 1;
	}

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
		score = score + 2;
	} else {
		alert('wrong');
		score --;
	}
	document.getElementById("input").value = "";
	init();
}

