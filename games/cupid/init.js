var context;
var queue;
var gameOver;
var WIDTH = 1000;
var HEIGHT = 572;
var mouseXPosition;
var mouseYPosition;
var batImage;
var stage;
var animation;
var deathAnimation;
var spriteSheet;
var enemyXPos=50;
var enemyYPos=50;
var enemyXSpeed = 5;
var enemyYSpeed = 2;
var score = 0;
var scoreText;
var gameTimer;
var gameTime = 60;
var timerText;
var clickable = true;

window.onload = function()
{		// Restart game
		gameOver = false;
		
    /*
     *      Set up the Canvas with Size and height
     *
     */
    var canvas = document.getElementById('myCanvas');
    context = canvas.getContext('2d');
    context.canvas.width = WIDTH;
    context.canvas.height = HEIGHT;
    stage = new createjs.Stage("myCanvas");

    /*
     *      Set up the Asset Queue and load sounds
     *
     */
    queue = new createjs.LoadQueue(false);
    queue.installPlugin(createjs.Sound);
    queue.on("complete", queueLoaded, this);
    // createjs.Sound.alternateExtensions = ["ogg"];

    /*
     *      Create a load manifest for all assets
     *
     */
    queue.loadManifest([
        {id: 'backgroundImage', src: 'assets/background.jpg'},
        {id: 'crossHair', src: 'assets/glove.png'},
        {id: 'shot', src: 'assets/shot.mp3'},
        {id: 'background', src: 'assets/music.mp3'},
        {id: 'gameOverSound', src: 'assets/gameOver.mp3'},
        {id: 'tick', src: 'assets/tick.mp3'},
        {id: 'hitSound', src: 'assets/yell.mp3'},
        {id: 'CupidSpriteSheet', src: 'assets/CupidSpriteSheet.png'},
        {id: 'batDeath', src: 'assets/batDeath.png'},
    ]);
    queue.load();

    /*
     *      Create a timer that updates once per second
     *
     */
    gameTimer = setInterval(updateTime, 1000);

}

function queueLoaded(event)
{
    // Add background image
    var backgroundImage = new createjs.Bitmap(queue.getResult("backgroundImage"))
    stage.addChild(backgroundImage);

    // Add Score
    scoreText = new createjs.Text("Score: " + score.toString(), "36px Arial", "white");
    scoreText.x = 10;
    scoreText.y = 10;
    stage.addChild(scoreText);

    // Ad Timer
    timerText = new createjs.Text("Time: " + gameTime.toString(), "36px Arial", "black");
    timerText.x = 750;
    timerText.y = 10;
    stage.addChild(timerText);

    // Play background sound
    createjs.Sound.play("background", {loop: -1});

    // Create cupid spritesheet
    spriteSheet = new createjs.SpriteSheet({
        "images": [queue.getResult('CupidSpriteSheet')],
        "frames": {"width": 368, "height": 288},
        "animations": { "flap": [0,7] }
    });

    // Create hit spritesheet
    batDeathSpriteSheet = new createjs.SpriteSheet({
    	"images": [queue.getResult('batDeath')],
    	"frames": {"width": 368, "height" : 288},
    	"animations": {"die": [0, 4, false, 1 ] }
    });
	



    // Create bat sprite
    createEnemy();


    // Create crosshair
    crossHair = new createjs.Bitmap(queue.getResult("crossHair"));
    crossHair.x = WIDTH/2;
    crossHair.y = HEIGHT/2;
    // stage.addChild(crossHair);


    // Add ticker
    createjs.Ticker.setFPS(15);
    createjs.Ticker.addEventListener('tick', stage);
    createjs.Ticker.addEventListener('tick', tickEvent);

    // Set up events AFTER the game is loaded
	// window.onmousemove = handleMouseMove;
    window.onclick = handleMouseDown;
}

function createEnemy()
{
	if (gameOver == false) {
		animation = new createjs.Sprite(spriteSheet, "flap");
			animation.regX = 99;
			animation.regY = 200;
			animation.x = enemyXPos;
			animation.y = enemyYPos;
			animation.gotoAndPlay("flap");
			stage.addChildAt(animation,1);
			clickable = true;
	}
}

function batDeath()
{
  deathAnimation = new createjs.Sprite(batDeathSpriteSheet, "die");
  deathAnimation.regX = 99;
  deathAnimation.regY = 200;
  deathAnimation.x = enemyXPos;
  deathAnimation.y = enemyYPos;
  deathAnimation.gotoAndPlay("die");
  stage.addChild(deathAnimation);
}


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


// function handleMouseMove(event)
// {
    // Offset the position by 100 pixels so mouse is in center of crosshair
    // crossHair.x = event.clientX;
    // crossHair.y = event.clientY - 300;
// }


function handleMouseDown(event)
{
		
		
			// Display CrossHair
			crossHair = new createjs.Bitmap(queue.getResult("crossHair"));
			crossHair.x = event.clientX-50;
			crossHair.y = event.clientY-130;
			stage.addChild(crossHair);
			createjs.Tween.get(crossHair).to({alpha: 0},1000);

			// Play sound
			createjs.Sound.play("shot");

			// Increase speed of enemy slightly
			// enemyXSpeed *= 1.02;
			// enemyYSpeed *= 1.01;

			// Obtain Shot position
			var shotX = Math.round(event.clientX);
			var shotY = Math.round(event.clientY);
			var spriteX = Math.round(animation.x)+50;
			var spriteY = Math.round(animation.y);

			// Compute the X and Y distance using absolte value
			var distX = Math.abs(shotX - spriteX);
			var distY = Math.abs(shotY - spriteY);

			// Anywhere in the body or head is a hit
			if(distX < 60 && distY < 70 && clickable==true)
			{
				// Hit
				stage.removeChild(animation);
				batDeath();
				score += 100;
				scoreText.text = "Score: " + score.toString();
				createjs.Sound.play("hitSound");
				
				// Prevent multiple clicks
				clickable = false;
				setTimeout(function(){clickable = true}, 2000);
				
					// Make it harder next time
				// enemyYSpeed *= 1.25;
				// enemyXSpeed *= 1.3;

				// Create new enemy
				var timeToCreate = 3000;
				setTimeout(createEnemy,timeToCreate);

			} else
			{
				// Miss
				score -= 10;
				scoreText.text = "Score: " + score.toString();

			}
			
			
			
		
}

function hit() {
	//Create hit image
	var hitImage = new createjs.Bitmap(queue.getResult("boom"))
	stage.addChild(hitImage);
	setTimeout(stage.removeChild(hitImage),500);
}

function updateTime()
{
	gameTime -= 1;
	if(gameTime == 0)
	{
		// End Game and Clean up
		timerText.text = "GAME OVER";
		stage.removeChild(animation);
		stage.removeChild(crossHair);
        createjs.Sound.removeSound("background");
        var si =createjs.Sound.play("gameOverSound");
		clearInterval(gameTimer);
		gameOver = true;
	}
	else
	{
		timerText.text = "Time: " + gameTime
		createjs.Sound.play("tick");
	}
}

