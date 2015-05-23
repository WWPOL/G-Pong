Paddle = function(playerIndex) {
	var X_OFFSET = 10;
	var DEFAULT_Y = document.getElementById("c").getContext("2d").height / 2;

	this.image = new Image();

	if (playerIndex === 0) {
		this.image.src = "../assets/paddle-blue.png";

		this.x = X_OFFSET;
	}
	else if (playerIndex === 1) {
		this.image.src = "../assets/paddle-red.png";

		this.x = document.getElementById("c").getContext("2d").width - X_OFFSET;
	}

	this.y = DEFAULT_Y - this.image.height / 2;
}

Paddle.prototype.render = function() {
	document.getElementById("c").getContext("2d").drawImage(this.image, this.x, this.y);
}

Paddle.prototype.getX = function() {
	return this.x
}

Paddle.prototype.getY = function() {
	return this.y;
}