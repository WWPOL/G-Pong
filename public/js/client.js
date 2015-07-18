var socket = io();

var SCORE_X = 50;
var SCORE_Y = 50;

var gameCanvas = document.getElementById("c");
var gameContext = gameCanvas.getContext("2d");

var background = new Image();
background.src = "../assets/background2.png"

var mouseX;
var mouseY;

var state = "waiting";

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
    if(state === "normal"){
        normalUpdate();
    }else if(state === "readyUp"){
        readyUpUpdate();
    }
}

var render = function() {
    gameContext.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    gameContext.drawImage(background, 0, 0)
    if(state === "normal"){
        normalRender();
    }else if(state === "readyUp"){
        readyUpRender();
    }else if(state === "waiting"){
        waitingRender();
    }else if(state === "mainMenu"){
        mainMenuRender();
    }else if(state === "createMenu"){
        createMenuRender();
    }else if(state === "joinMenu"){
        joinMenuRender();
    }

}

then = Date.now();
