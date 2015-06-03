var Game = require("./game.js");

var X_OFFSET = 10;
var DEFAULT_Y = 300;

Paddle = function(playerIndex) {
    this.playerIndex = playerIndex;

    this.height = 100;
    this.width = 20;

    if (playerIndex === 0) {
        this.x = X_OFFSET;
    } else if (playerIndex === 1) {
        this.x = Game.GAME_WIDTH - this.width - X_OFFSET;
    }

    this.y = DEFAULT_Y - this.height / 2;
}

Paddle.prototype.randomizePosition = function() {
	this.y = Math.random() * (Game.GAME_HEIGHT - this.height);
};

module.exports = Paddle;
