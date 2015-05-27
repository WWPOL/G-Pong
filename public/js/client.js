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

var gravityVector1 = new Vector(0,0,undefined,undefined);
var gravityVector2 = new Vector(0,0,undefined,undefined);

var ballMovementX = 0;
var ballMovementY = 0;

var gravityVector1X = 0;
var gravityVector1Y = 0;

var gravityVector2X = 0;
var gravityVector2Y = 0;

var ball = new Ball(10);
var score1 = 0;
var score2 = 0;
var well1 = new Ball(20);
var well2 = new Ball(20);
var paddle1 = new Paddle(0)
var paddle2 = new Paddle(1)
var spectator = false;

var countdown = false;

//var game = new Game();

var drawVector = function(vectorX, vectorY, ball, gravity){
	gameContext.beginPath();
	gameContext.moveTo(ball.x + ball.radius, ball.y + ball.radius);
	if(gravity == false){
		gameContext.lineTo(ball.x + ball.radius + (20 * vectorX), ball.y + ball.radius + (20 * vectorY));
	}else{
		gameContext.lineTo(ball.x + ball.radius + (200 * vectorX), ball.y + ball.radius + (200 * vectorY));
	}
	gameContext.strokeStyle="rgb(255,0,0)"
	gameContext.lineWidth = 4;
	gameContext.stroke();

}

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


		drawVector(ballMovementX, ballMovementY, ball, false);

		drawVector(gravityVector1X, gravityVector1Y, ball, true);
		drawVector(gravityVector2X, gravityVector2Y, ball, true);

		if(typeof serverInfo !== "undefined"){
			ball.render();
			well1.lastHit = 0;
			well1.render();
			well2.lastHit = 1;
			well2.render();
		}
	}else{
		if(alreadyDone == false){
			gameContext.drawImage(background, 0, 0)
			alreadyDone = true;
			gameContext.font = "30px Arial"
			gameContext.drawImage(background, 0, 0)

			gameContext.font = "30px Arial";
			gameContext.fillStyle = "white";
			gameContext.fillText("Player 1: " + score1, 50, 60);
			gameContext.fillText("Player 2: " + score2, 1100, 60);

			paddle1.render();
			paddle2.render();

			if(typeof serverInfo !== "undefined"){
				ball.render();
				well1.lastHit = 0;
				well1.render();
				well2.lastHit = 1;
				well2.render();
			}
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
					well1.lastHit = 0;
					well2.lastHit = 1; well2.render();
				}
				gameContext.fillText("2", 630, 360);
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
						well1.lastHit = 0;
						well1.render();
						well2.lastHit = 1; well2.render();
					}
					gameContext.fillText("1", 630, 360);
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
							well1.lastHit = 0;
							well1.render();
							well2.lastHit = 1; 
							well2.render();
						}
						countdown = false;
						alreadyDone = false;
					}, 1000);
				}, 1000);
			}, 1000);	
		}
	}
}

then = Date.now();