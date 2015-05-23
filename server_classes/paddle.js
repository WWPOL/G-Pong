Paddle = function(playerIndex) {
	this.playerIndex = playerIndex;

	var X_OFFSET = 10;
	var DEFAULT_Y = 360;


	this.y = DEFAULT_Y - 50;
}

Paddle.prototype.render = function() {
gameContext.drawImage(this.image, this.getX(), this.getY());
}

Paddle.prototype.getX = function() {
	return this.x
}

Paddle.prototype.getY = function() {
	return this.y;
}

Paddle.prototype.setY = function(y) {
	this.y = y;
}

module.exports = Paddle;