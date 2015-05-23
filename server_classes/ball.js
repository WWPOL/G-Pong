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
	if (C.collision(this, this.paddle1)) {
		this.movement.setX(-this.movement.getX());
		console.log("Your mom is fat");
	}
	if (C.collision(this, this.paddle2)) {
		this.movement.setX(-this.movement.getX());
		console.log("I love you");
	}


	if(this.x < 0){this.movement.setX(Math.abs(this.movement.getX()))}
	if(this.x + (2*this.radius) > 1280){this.movement.setX(-Math.abs(this.movement.getX()))}
	if(this.y < 0){this.movement.setY(Math.abs(this.movement.getY()))}
	if(this.y + (2*this.radius) > 720){this.movement.setY(-Math.abs(this.movement.getY()))}

	this.x += this.movement.getX();
	this.y += this.movement.getY();

	
};

module.exports = Ball;	