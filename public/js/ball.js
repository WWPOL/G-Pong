Ball = function(x, y, mass, movement) {
	this.image = new Image();
	image.src = "../assets/ball-blue.png"

	this.x = x;
	this.y = y;
	this.mass = mass;
	this.movement = movement;
};

Ball.prototype.getX = function() {
	return this.x;
};

Ball.prototype.getY = function(){
	return this.y;
};

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

Ball.prototype.render = function(){
	gameContext.drawImage(image, this.getX(), this.getY());
};