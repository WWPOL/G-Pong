var socket = io();

var gameCanvas = document.getElementById("c");
var gameContext = gameCanvas.getContext("2d");

var paddle = new Paddle(0);

var main = function(){
	now = Date.now();
	delta = now - then;

	update(delta/1000);
	render();

	requestAnimationFrame(main);
}

var update = function(delta){
	ball.update(delta);
}

var render = function(){
	gameContext.clearRect(0,0,gameCanvas.width,gameCanvas.height);
	ball.render();
	paddle.render();
}

then = Date.now();
main();