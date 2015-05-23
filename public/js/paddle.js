Paddle = new function(playerIndex) {
	var X_OFFSET = 10;
	var DEFAULT_Y = gameContext.height / 2;

	if (playerIndex === 0) {
		this.x = X_OFFSET;
		this.y = DEFAULT_Y;
	}
	else if (playerIndex === 1) {
		this.x = gameContext.width - X_OFFSET;
		this.y = DEFAULT_Y;
	}
}

var Paddle.prototype.getX() = function() {
	return this.x
}

var Paddle.prototype.getY() = function() {
	return this.y;
}