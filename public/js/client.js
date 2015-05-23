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
var score1 = 0;
var score2 = 0;
var well1 = new Ball(20);
var well2 = new Ball(20);
var paddle1 = new Paddle(0)
var paddle2 = new Paddle(1)

var countdown = false;

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

var alreadyDone = false;

var render = function(){
	if(countdown == false){
		gameContext.clearRect(0,0,gameCanvas.width, gameCanvas.height);
		gameContext.drawImage(background, 0, 0)

		gameContext.font = "30px Arial";
		gameContext.fillStyle = "white";
		gameContext.fillText("Player 1: " + score1, 50, 60);
		gameContext.fillText("Player 2: " + score2, 1100, 60);

		paddle1.render();
		paddle2.render();

		if(typeof serverInfo !== "undefined"){
			ball.render();
			well1.render();
			well2.render();
		}
	}else{
		if(alreadyDone == false){
			alreadyDone = true;
			gameContext.font = "30px Arial"
			gameContext.fillText("3", 630, 360);	
			setTimeout(function() {
				gameContext.clearRect(0,0,gameCanvas.width, gameCanvas.height);
				gameContext.drawImage(background, 0, 0)

				gameContext.font = "30px Arial";
				gameContext.fillStyle = "white";
				gameContext.fillText("Player 1: " + score1, 50, 60);
				gameContext.fillText("Player 2: " + score2, 1100, 60);

				paddle1.render();
				paddle2.render();

				if(typeof serverInfo !== "undefined"){
					ball.render();
					well1.render();
					well2.render();
				}
				gameContext.fillText("2", 630, 360);
				setTimeout(function() {
					gameContext.clearRect(0,0,gameCanvas.width, gameCanvas.height);
					gameContext.font = "30px Arial";
					gameContext.fillStyle = "white";
					gameContext.fillText("Player 1: " + score1, 50, 60);
					gameContext.fillText("Player 2: " + score2, 1100, 60);

					paddle1.render();
					paddle2.render();

					if(typeof serverInfo !== "undefined"){
						ball.render();
						well1.render();
						well2.render();
					}
					gameContext.fillText("1", 630, 360);
					setTimeout(function() {
						gameContext.clearRect(0,0,gameCanvas.width, gameCanvas.height);	
						countdown = false;
						alreadyDone = false;
					}, 1000);
				}, 1000);
			}, 1000);	
		}
	}
}

then = Date.now();