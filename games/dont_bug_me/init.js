var context;
var queue;
var WIDTH = 1024;
var HEIGHT = 768;
var mouseXPosition;
var mouseYPosition;
// var batImage;
var stage;
var animation;
// var deathAnimation;
var spriteSheet;
var enemyXPos=100;
var enemyYPos=100;
var enemyXSpeed = 1.5;
var enemyYSpeed = 1.75;
// var score = 0;
// var scoreText;
// var gameTimer;
// var gameTime = 0;
// var timerText

window.onload = function(){
	var canvas = document.getElementById('myCanvas');
	context = canvas.getContext('2d');
	context.canvas.width = WIDTH;
	context.canvas.height = HEIGHT;
	stage = new createjs.Stage('myCanvas');
	
	queue = new createjs.LoadQueue(false);
	queue.installPlugin(createjs.Sound);
	queue.on('complete', queueLoaded, this);
	
	queue.loadManifest([
		{id: 'backgroundImage', src: 'assets/background.png'},
		{id: 'batSpritesheet', src: 'assets/AngrySpritesheet.png'},

	]);
	queue.load();
};

function queueLoaded(event){
	var backgroundImage = new createjs.Bitmap(queue.getResult('backgroundImage'));
	stage.addChild(backgroundImage);
	
	   // Add ticker (must have)
    createjs.Ticker.setFPS(15);
    createjs.Ticker.addEventListener('tick', stage);
    createjs.Ticker.addEventListener('tick', tickEvent);
		// 
	spriteSheet = new createjs.SpriteSheet({
	"images": [queue.getResult('AngrySpritesheet')],
	"frames": {"width": 54, "height": 100},
	"animations": { "flap": [0,1] }
    });
};

function tickEvent()
{
	//Make sure enemy bat is within game boundaries and move enemy Bat
	if(enemyXPos < WIDTH && enemyXPos > 0)
	{
		enemyXPos += enemyXSpeed;
	} else 
	{
		enemyXSpeed = enemyXSpeed * (-1);
		enemyXPos += enemyXSpeed;
	}
	if(enemyYPos < HEIGHT && enemyYPos > 0)
	{
		enemyYPos += enemyYSpeed;
	} else
	{
		enemyYSpeed = enemyYSpeed * (-1);
		enemyYPos += enemyYSpeed;
	}

	animation.x = enemyXPos;
	animation.y = enemyYPos;

	
}
