var license;
var score = 0;
var time = 4000;
var rectWidth = 100;
var rectHeight = 40;
var level = 1;
var SoundYes = new Audio('sounds/yes.mp3');
var SoundNo = new Audio('sounds/no.mp3');
var stage;
var ScoreText, LevelText;
function init() {
	
	var canvas = document.getElementById("my_canvas");
	stage = new createjs.Stage(canvas);
	var result = document.getElementById("result");
	

	// show score
	ScoreText = new createjs.Text("Score: "+ score, "bold 20px Times", "white");
	ScoreText.x = 10;
	ScoreText.y = 10;

	// Game Over

	
	// show level
	LevelText = new createjs.Text("Level: " + level, "bold 20px Times", "white");
	LevelText.x = 400;
	LevelText.y = 10;
	stage.addChild(LevelText, ScoreText);
	stage.update();
	
	// Remove flip effect so we can add back on
	setTimeout(function(){
		document.getElementById('MainDiv').classList.remove('flipInX');
	},1000);
	
	// Create license plate number
	license = createLicense();
	var licenseGraphic = new createjs.Text(first + letters + nums, "bold 20px Times", "black");
	licenseGraphic.shadow = new createjs.Shadow('#878787', 0.2, 0.7, 2);
	licenseGraphic.set({
		textAlign: "center",
		textBaseline: "middle",
		x: rectWidth/2,
		y: rectHeight/2
	})

	// Create plate
	var plate = new createjs.Shape();
	plate.graphics.beginStroke("black");
	plate.graphics.beginFill("white").drawRoundRect(0, 0, rectWidth, rectHeight, 7);
	plate.regX = rectWidth/2;
	plate.regY = rectHeight/2;

	
	setTimeout(function(){
		stage.addChild(plate);
		stage.addChild(licenseGraphic);
		
		licenseGraphic.x = Math.random()*(canvas.width-rectWidth) + rectWidth/2;
		licenseGraphic.y = Math.random()*(canvas.height-rectHeight) + rectHeight/2;
		plate.x = licenseGraphic.x;
		plate.y = licenseGraphic.y;
		stage.update();
		console.log(plate.x, plate.y);
	},3000);
	

	// Remove license plate 2 seconds after license is created
	setTimeout(function(){
		stage.removeChild(licenseGraphic);
		stage.removeChild(plate);
		stage.update();
	}, 3000+time);
	
	// Level 2
	if (score>=2){
		next_level();
		canvas.style.backgroundImage = "url('img/road2.jpg')";
		stage.update();
	}
	
	// Level 3
	if (score>=4){
		next_level();
		canvas.style.backgroundImage = "url('img/road3.jpg')";
		stage.update();
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
	}
	return first + letters + nums;

}

function show_result(){
	var answer = document.getElementById("input").value;
	if (answer.toUpperCase() === license) {
		var yes = document.createElement('img');
		yes.setAttribute('src','img/yes.png');
		yes.setAttribute('width', '70px');
		result.appendChild(yes);
		result.classList.add('tada');
		SoundYes.play();
		score += 2;
		
	} else {
		var no = document.createElement('img');
		no.setAttribute('src','img/no.png');
		no.setAttribute('width', '70px');
		result.appendChild(no);
		SoundNo.play();
		result.classList.add('tada');
		score -= 2;
	}
	// Empty input form
	document.getElementById("input").value = "";
	init();
	setTimeout(function(){
		result.removeChild(result.lastChild);
		result.classList.remove('tada');
		
	},2000)
	
}

function next_level(){
	var LevelUp = document.createElement('img');
		LevelUp.setAttribute('src','img/level_up.png');
		LevelUp.setAttribute('width', '70px');
		result.appendChild(LevelUp);
		result.classList.add('fadeOutUp');
		level += 1;
		score = 0;
		time = 0.7*time;
		
		document.getElementById('MainDiv').classList.add('flipInX');
		// Remove animation class to add next time
		setTimeout(function(){
			result.removeChild(result.lastChild);
			result.classList.remove('fadeOutUp');	
			stage.update();
	},3000);
		
		
}
