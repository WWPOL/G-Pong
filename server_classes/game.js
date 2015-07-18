var Ball = require("./ball.js");
var Paddle = require("./paddle.js");
var Gravity = require("./gravityFunctions.js");

GAME_WIDTH = 1280;
GAME_HEIGHT = 720;

WELL_MASS = 50;
BALL_MASS = 10;

Game = function(listenerAction) {
    this.listenerAction = listenerAction;

    this.ball = new Ball(500, 500, 10, BALL_MASS, this);
    this.paddle1 = new Paddle(0);
    this.paddle2 = new Paddle(1);
    this.ballController = -1;
    this.well1 = new Ball(300, 300, 20, WELL_MASS);
    this.well2 = new Ball(900, 900, 20, WELL_MASS);

    this.reset();

    this.countdown = 0;
    this.score1 = 0;
    this.score2 = 0;
};

Game.prototype.update = function() {
    if (this.isRunning()) {
        Gravity.performGravity(this.ball, this.well1);
        Gravity.performGravity(this.ball, this.well2);

        this.ball.update();
    }
};

Game.prototype.reset = function() {
    this.ballController = -1;
    this.ball.x  = (GAME_WIDTH / 2) - (this.ball.width / 2);
    this.ball.y = (GAME_HEIGHT / 2) - (this.ball.height / 2);
    this.ball.movement.x = 0;
    this.ball.movement.y = 0;

    this.startCountdown();
};

Game.prototype.resetScore = function(){
    this.score1 = 0;
    this.score2 = 0;
}

Game.prototype.paddleCollision = function(paddleIndex) {
    if (paddleIndex === 0) {
    	this.ballController = 0;
        this.paddle1.randomizePosition();
    } else if (paddleIndex === 1) {
    	this.ballController = 1;
        this.paddle2.randomizePosition();
    } else {
        logerror("Mistakes were made: invalid paddleIndex.");
    }
};

Game.prototype.pointScored = function(scorerIndex) {
    if (scorerIndex === 0) {
        this.score1++;
        this.reset();
    } else if (scorerIndex === 1) {
        this.score2++;
        this.reset();
    } else {
        logerror("Mistakes were made: invalid scorerIndex.");
    }
};

Game.prototype.startCountdown = function() {
	this.listenerAction("startCountdown");

    this.countdown = 3;
    var self = this;

    // Recursion yaaaaaaay.
    function decrement() {
        setTimeout(function() {
            self.countdown--;
            if (self.countdown > 0) {
                decrement();
            }
        }, 1000)
    }

    decrement();
};

Game.prototype.isRunning = function() {
    return this.countdown === 0;
};

Game.prototype.serialize = function() {
    return {
        paddle1Y: this.paddle1.y,
        paddle2Y: this.paddle2.y,

        ballX: this.ball.x,
        ballY: this.ball.y,

        well1X: this.well1.x,
        well1Y: this.well1.y,
        well2X: this.well2.x,
        well2Y: this.well2.y,

        countdown: this.countdown,

        score1: this.score1,
        score2: this.score2,

        ballController: this.ballController,
    }
};

module.exports = Game;

exports.GAME_WIDTH = GAME_WIDTH;
exports.GAME_HEIGHT = GAME_HEIGHT;