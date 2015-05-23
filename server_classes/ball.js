var C = require("./collisions.js");

Ball = function(x, y, radius, mass, movement, paddle1, paddle2) {
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.mass = mass;
	this.movement = movement;
	this.paddle1 = paddle1;
	this.paddle2 = paddle2;
};

Ball.prototype.getX = function() {
	return this.x;
};

Ball.prototype.getY = function(){
	return this.y;
};

Ball.prototype.getRadius = function(){
	return this.radius
}

Ball.prototype.setX = function(x){
	thix.x = x;
}

Ball.prototype.setY = function(y){
	this.y = y;
}

Ball.prototype.getMass = function(){
	return this.mass;
};

Ball.prototype.getMovement = function(){
	return this.movement;
};

Ball.prototype.update = function(delta) {
	this.x += this.movement.getX();
	this.y += this.movement.getY();

	if (C.collision(this, this.paddle1)) {
		console.log("Your mom is fat");
	}
	if (C.collision(this, this.paddle2)) {
		console.log("I love you");
	}
};

module.exports = Ball;	