Paddle = new function(int player) {
	if (player === 1) {
		this.x = 10;
		this.y = gameContext.height / 2;
	}
	else if (player === 2) {
		this.x = gameContext.width - 10;
		this.y = gameContext.height / 2;
	}
}

var getX() {
	return this.x;
}

var getY() {
	return this.y;
}