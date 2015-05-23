var socket = io();

var gameCanvas = document.getElementById("c");
var gameContext = gameCanvas.getContext("2d");

var mouseX;
var mouseY;

var serverInfo;
var clientInfo = new ClientInfo();

var clientNum;

var ball = new Ball();
var paddle1 = new Paddle(0)
var paddle2 = new Paddle(1)

var game = new Game();

var main = function(){
	now = Date.now();
	delta = now - then;

	update(delta/1000);
	render();

	requestAnimationFrame(main);
}

var update = function(delta) {

}

var render = function(){
	paddle1.render();
	paddle2.render();
	ball.render();
	serverInfo.getWell1().render();
	serverInfo.getWell2().render();
}

then = Date.now();