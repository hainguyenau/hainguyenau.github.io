var license;
var score = 0;
var time = 8000;
var rectWidth = 100;
var rectHeight = 40;
var carWidth = 245, carHeight = 196;
var level = 1;
var SoundYes = new Audio('sounds/yes.mp3');
var SoundNo = new Audio('sounds/no.mp3');
var SoundPass = new Audio('sounds/pass.mp3');
var SoundTheme = new Audio('sounds/theme.mp3')
var stage;
var ScoreText, LevelText;
var horizonX = 250, horizonY = 75;
function init() {
	// Play and loop theme sound
	SoundTheme.play();
	SoundTheme.loop = true;
	
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
	;
	
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
		x: carWidth/2,
		y: carHeight/2
	})
	
	// Create car
	var car = new createjs.Bitmap('img/car'+Math.floor(Math.random()*6).toString()+'.png');
	car.regX = carWidth/2;
	car.regY = carHeight/2+25;
	
	stage.addChild(car);
	stage.addChild(licenseGraphic);
	
	licenseGraphic.x = Math.random()*(canvas.width-rectWidth) + rectWidth/2;
	licenseGraphic.y = 310;
	car.x = licenseGraphic.x;
	car.y = licenseGraphic.y;
	
	SoundPass.play();
	// Ticker
	createjs.Ticker.setFPS(30);
	createjs.Ticker.addEventListener("tick", handleTick);
	
	function handleTick(event) {
		var distX = licenseGraphic.x - horizonX;
		var distY = licenseGraphic.y - horizonY;
		var scale = 0.997;
		licenseGraphic.x -= distX/(time/1000)/30;
		licenseGraphic.y -= distY/(time/1000)/30;
		car.x -= distX/(time/1000)/30;
		car.y -= distY/(time/1000)/30;
		licenseGraphic.scaleX *= scale;
		licenseGraphic.scaleY *= scale;
		car.scaleX *= scale;
		car.scaleY *= scale;
		stage.update();

	}

	// Remove license plate 2 seconds after license is created
	// setTimeout(function(){
		// stage.removeChild(licenseGraphic);
		// stage.removeChild(car);
		// ;
	// }, 3000+time);
	
	// Level 2
	if (score>=10){
		next_level();
		canvas.style.backgroundImage = "url('img/road2.jpg')";
		;
	}
	
	// Level 3
	if (score>=20){
		next_level();
		canvas.style.backgroundImage = "url('img/road3.jpg')";
		;
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
		// score = 0;
		time = 0.7*time;
		
		document.getElementById('MainDiv').classList.add('flipInX');
		// Remove animation class to add next time
		setTimeout(function(){
			result.removeChild(result.lastChild);
			result.classList.remove('fadeOutUp');	
			;
	},3000);
}

