// Represents a game session
Game = function() {
	this.leftPaddle = new Paddle(0);
	this.rightPaddle = new Paddle(1);

	this.ball = new Ball(500, 500, 10,  new Vector(1, 0));
};

Game.prototype.render = function() {
	this.leftPaddle.render();
	this.rightPaddle.render();
	this.ball.render();
}