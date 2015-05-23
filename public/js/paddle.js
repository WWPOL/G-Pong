Paddle = function(playerIndex) {
	this.playerIndex = playerIndex;

	var X_OFFSET = 10;
	var DEFAULT_Y = gameCanvas.height / 2;

	this.image = new Image();

	this.height = 200;
	this.width = 20;

	if (playerIndex === 0) {
		this.image.src = "../assets/paddle-blue.png";

		this.x = X_OFFSET;
	}
	else if (playerIndex === 1) {
		this.image.src = "../assets/paddle-red.png";

		this.x = gameCanvas.width - this.width - X_OFFSET;
	}

	this.y = DEFAULT_Y - this.height / 2;
}

Paddle.prototype.render = function() {
	gameContext.drawImage(this.image, this.getX(), this.getY(), this.getWidth(), this.getHeight());
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

Paddle.prototype.getHeight = function() {
	return this.height;
};

Paddle.prototype.getWidth = function(){
	return this.width;
};
