var socket = io();

var gameCanvas = document.getElementById("c");
var gameContext = gameCanvas.getContext("2d");

var mouseX;
var mouseY;

var serverInfo;
var clientInfo = new ClientInfo();

var background = new Image();
background.src = "../assets/Background.png"

var clientNum;

var ball = new Ball(10);
var well1 = new Ball(20);
var well2 = new Ball(20);
var paddle1 = new Paddle(0)
var paddle2 = new Paddle(1)

//var game = new Game();

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
	gameContext.clearRect(0,0,gameCanvas.width, gameCanvas.height);
	gameContext.drawImage(background, 0, 0)

	paddle1.render();
	paddle2.render();

	if(typeof serverInfo !== "undefined"){
		ball.render();
		well1.render();
		well2.render();
	}
}

then = Date.now();