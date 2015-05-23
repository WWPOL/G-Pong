Ball = function(x, y, radius, mass, movement) {
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.mass = mass;
	this.movement = movement;
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
};

module.exports = Ball;	