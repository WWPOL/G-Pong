var socket = io();

var SCORE_X = 50;
var SCORE_Y = 50;

var gameCanvas = document.getElementById("c");
var gameContext = gameCanvas.getContext("2d");

var background = new Image();
background.src = "../assets/background.png"

var mouseX;
var mouseY;

var clientNum;
var spectator = false;

var ball = new Ball(10);
var well1 = new Ball(20);
var well2 = new Ball(20);
var paddle1 = new Paddle(0);
var paddle2 = new Paddle(1);
var countdown = 0;

var score1 = 0;
var score2 = 0;
var ballController = -1;

var encouragement = ["is adopted", "lives with his mom", "is a loser", "eats boogers", "is a dweeb"];
var encouragementIndex = 0;

var main = function() {
    now = Date.now();
    delta = now - then;

    update(delta / 1000);
    render();

    requestAnimationFrame(main);
}

pArray = []

var update = function(delta) {
    // Yeah we should probably put some stuff here or the server is going to light on fire
    pArray.push(new Particle(new Vector2(ball.x + ball.radius, ball.y + ball.radius)));
    pArray.forEach(function(p){
        p.update();
        if(p.isDead()){
            index = pArray.indexOf(p);
            pArray.splice(index,1)
        }
    });
}

var render = function() {
    gameContext.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    gameContext.drawImage(background, 0, 0)

    pArray.forEach(function(p){
        p.render(ballController);
    });

    gameContext.font = "30px Ubuntu";
    gameContext.fillStyle = "white";

    gameContext.fillText(score1, SCORE_X, SCORE_Y);
    gameContext.fillText(score2, gameCanvas.width - SCORE_X, SCORE_Y);

    paddle1.render();
    paddle2.render();

    well1.render(0);
    well2.render(1);
    ball.render(ballController);

    // We render the countdown information.
    if (countdown !== 0) {
        var textWidth = gameContext.measureText(countdown).width;
        gameContext.fillText(countdown, (gameCanvas.width / 2) - (textWidth / 2), gameCanvas.height / 2);

        if (score1 > score2) {
            gameContext.fillText("red " + encouragement[encouragementIndex], 200, 200);
        } else if (score2 > score1) {
            gameContext.fillText("blue " + encouragement[encouragementIndex], 200, 200);
        }
    }

}

then = Date.now();
