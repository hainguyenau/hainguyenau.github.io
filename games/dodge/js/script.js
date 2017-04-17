var KEYCODE_LEFT = 37,
   KEYCODE_RIGHT = 39,
   KEYCODE_UP = 38,
   KEYCODE_DOWN = 40;
var r_move_x = 10,
		r_move_y = 10;

function init() {
	var canvas = document.getElementById("my_canvas");
	var stage = new createjs.Stage(canvas);
	var SIZE = 100
	

	// Create enemy
	
	// var r = new createjs.Shape();
	// r.graphics.beginFill("blue").rect(0, 0, SIZE, SIZE);
	
	var r = new createjs.Bitmap("assets/ball.png");
	r.regX = SIZE/2;
	r.regY = SIZE/2;
	
	r.x = 1;
	r.y = 400;
	
	// Create rectangle player
	var me = new createjs.Shape();
	me.graphics.beginFill("red").rect(0, 0, SIZE, SIZE);
	me.regX = SIZE/2;
	me.regY = SIZE/2;
	
	me.x = canvas.width/2;
	me.y = 400;
	
	// Keyboard handler
	window.onkeydown = keyDownHandler;
	
	// Add children
	stage.addChild(me);
	stage.addChild(r);
	
	// Ticker
	createjs.Ticker.setFPS(30);
	createjs.Ticker.addEventListener("tick", handleTick);
	
	function handleTick(event) {
		r.rotation += 10;
		r.x += r_move_x;
		r.y += r_move_y;
		
		// Keep the square enemy inside canvas
			// hitting left edge
		if (((r.x + SIZE/2) > canvas.width)) {
			overshootX = (r.x + SIZE/2) - canvas.width;
			r.x = canvas.width - overshootX - SIZE/2;
			r_move_x *= -1;
		} 	
			// hitting right edge
		if (((r.x - SIZE/2) < 0)) {
			overshootX = SIZE/2 - r.x;
			r.x = SIZE/2;
			r_move_x *= -1;
		} 
			// hitting bottom edge
		if ((r.y + SIZE/2) > canvas.height) {
			overshootY = (r.y + SIZE/2) - canvas.height;
			r.y = canvas.height - overshootY - SIZE/2;
			r_move_y *= -1;
		} 	
			// hitting top edge
		if ((r.y - SIZE/2) < 0) {
			overshootY = SIZE/2 - r.y;
			r.y = SIZE/2;
			r_move_y *= -1;
		} 

		
		// Collision with red square 
		if (Math.abs(r.x - me.x) < SIZE && Math.abs(r.y - me.y) < SIZE) {
			stage.removeChild(me);
			setTimeout(function(){
				stage.addChild(me);
			}, 3000);
		}
		
		// Make me bigger if hit
		
		
		// Make blue rect faster over time
		
		
		// Animate me getting scared when the square is near, but not hit
		stage.update();
		

	}
	
	function keyDownHandler(event) {
		switch(event.keyCode){
			case KEYCODE_LEFT:
				me.x -= 10;
				break;
			case KEYCODE_RIGHT:
				me.x += 10;
				break;
			case KEYCODE_UP:
				me.y -= 10;
				break;
			case KEYCODE_DOWN:
				me.y += 10;
				break;
		}
	}

	
	
	
}