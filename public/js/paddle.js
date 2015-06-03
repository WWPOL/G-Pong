Paddle = function(playerIndex) {
	this.playerIndex = playerIndex;
	this.score = 0;

	var X_OFFSET = 10;

	this.image = new Image();

	this.height = 200;
	this.width = 20;
	this.dead = false;


	if (playerIndex === 0) {
		this.image.src = "../assets/paddle-blue.png";

		this.x = X_OFFSET;
	}
	else if (playerIndex === 1) {
		this.image.src = "../assets/paddle-red.png";

		this.x = gameCanvas.width - this.width - X_OFFSET;
	}
	this.y = 0;
}

Paddle.prototype.render = function() {
	gameContext.drawImage(this.image, this.x, this.y, this.width, this.height);
}