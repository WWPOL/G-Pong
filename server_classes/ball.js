var C = require("./collisions.js");
var Game = require("./game.js");
var Vector = require("./vector.js");

Ball = function(x, y, radius, mass, game) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.mass = mass;
    this.game = game;
    this.movement = new Vector(0, 0, 0, 0);
};

Object.defineProperty(Ball.prototype, 'width', {
    get: function() {
        return this.radius * 2;
    }
});

Object.defineProperty(Ball.prototype, 'height', {
    get: function() {
        return this.radius * 2;
    }
});

Ball.prototype.update = function(delta) {
    if (C.collision(this, this.game.paddle1)) {
        this.movement.x = -this.movement.x;
        this.game.paddleCollision(0);
    }

    if (C.collision(this, this.game.paddle2)) {
        this.movement.x = -this.movement.x;
        this.game.paddleCollision(1);
    }

    // Either score points or bounce off the left or right depending on who owns the ball.
    if (this.x - (2 * this.radius) < 0) {
        if (this.game.ballController === 1) {
            this.game.pointScored(1);
        } else {
            this.movement.x = -this.movement.x;
        }
    } else if (this.x + (2 * this.radius) > Game.GAME_WIDTH) {
        if (this.game.ballController === 0) {
            this.game.pointScored(0);
        } else {
            this.movement.x = -this.movement.x;
        }
    }

    // Bounce off top and bottom.
    if (this.y - (2 * this.radius) < 0) {
        this.movement.setY(Math.abs(this.movement.getY()))
    } else if (this.y + (2 * this.radius) > 720) {
        this.movement.setY(-Math.abs(this.movement.getY()))
    }

    this.x += this.movement.getX();
    this.y += this.movement.getY();
};

module.exports = Ball;
