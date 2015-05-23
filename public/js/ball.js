Ball = function(radius) {
	this.image = new Image();
	this.image.src = "../assets/ball-blue.png"

	this.x;
	this.y;
	this.radius = radius
};

Ball.prototype.getX = function() {
	return this.x;
};

Ball.prototype.getY = function(){
	return this.y;
};

Ball.prototype.getRadius = function() {
	return this.radius;
}

Ball.prototype.setX = function(x){
	thix.x = x;
}

Ball.prototype.setY = function(y){
	this.y = y;
}

Ball.prototype.setRadius = function() {
	this.radius = radius;
}

Ball.prototype.render = function(){
	gameContext.drawImage(this.image, this.x, this.y, this.radius * 2, this.radius * 2);
};