function init() {
	
	var canvas = document.getElementById("my_canvas");
	var stage = new createjs.Stage(canvas);
	
	// Variables
	var centerX = canvas.width/2;
	var centerY = canvas.height/2;
 
	
	// Create cards (burger & pizza)and positions
	var b = new createjs.Bitmap('assets/card_back.png');
	var p = new createjs.Bitmap('assets/card_back.png');
	var burger = new createjs.Bitmap('assets/burger.jpg');
	var pizza = new createjs.Bitmap('assets/pizza.jpg');
	p.x = 300;
	pizza.x = 300;
	


	// Add cards to canvas
	stage.addChild(b);
	stage.addChild(p);
	
	// Cards on click
	b.on("click", function(event){
		stage.removeChild(b);
		stage.addChild(burger);
	})

	p.on("click", function(event){
		stage.removeChild(p);
		stage.addChild(pizza);
	})
	
	
	// Ticker
	createjs.Ticker.setFPS(30);
	createjs.Ticker.addEventListener("tick", handleTick);
	
	// Functions
	function handleTick(event) {
		stage.update();
	}

	
}