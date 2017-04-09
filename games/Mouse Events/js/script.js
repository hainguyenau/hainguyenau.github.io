function init() {
	var canvas = document.getElementById("my_canvas");
	var stage = new createjs.Stage(canvas);
	
	var centerX = canvas.width/2;
	var centerY = canvas.height/2;
	
	// Create a sprite sheet and animation
	var ss = new createjs.SpriteSheet({
		animations: {
			fly: [0,5],
			explode: [6, 10, "fly"]}, // after explode, play fly again
			images: ["img/spritesheet.png"],
			frames: {
				regX: 207,
				regY: 166.5,  // at center of ship: half width, half length
				width: 414,
				height: 333
			}
	});
	
	// Create the ship bitmap animation
	var ship = new createjs.Sprite(ss);
	
	ship.x = centerX;
	ship.y = centerY;
	ship.scaleX = 0.5;
	ship.scaleY = 0.5;
	ship.gotoAndPlay("fly");
	
	// explode on click, may not work on local
	ship.addEventListener("click", function(event) {
		ship.gotoAndPlay("explode");
	})
	
	// To make cursor disappear: go to css #my_canvas: cursor: none
	stage.addChild(ship);

	createjs.Ticker.setFPS(30);
	createjs.Ticker.addEventListener("tick", handlerTick);
	
	function handlerTick(event) {

		stage.update()

	}
}