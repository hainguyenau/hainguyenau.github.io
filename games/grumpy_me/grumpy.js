// Variables

//
window.onload = function(){
	//set up canvas with size and height
	var canvas = document.getElementById('myCanvas');
	context = canvas.getContext('2d');
	context.canvas.width = WIDTH;
	context.canvas.height = HEIGHT;
	stage = new createjs.Stage('myCanvas');
	
	//set up asset queue
	queue = new createjs.LoadQueue(false);
	queue.installPlugin(createjs.Sound);
	queue.on('complete', qu
	
};