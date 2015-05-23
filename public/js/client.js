var socket = io();

var gameCanvas = document.getElementById("c");
var gameContext = gameCanvas.getContext("2d");

var mouseX;
var mouseY;

var serverInfo;
var clientInfo;

var main = function(){
	now = Date.now();
	delta = now - then;

	update(delta/1000);
	render(0);

	requestAnimationFrame(main);
}

var update = function(delta){
	
}

var render = function(){
	
}

then = Date.now();
main();