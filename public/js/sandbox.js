var socket = io();

var gameCanvas = document.getElementById("c");
var gameContext = gameCanvas.getContext("2d");

var ball = new Ball(20, 20, 10, new Vector(1,0, null, null));

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
}

then = Date.now();
main();