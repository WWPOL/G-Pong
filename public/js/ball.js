Ball = function() {
	this.image = new Image();
	this.image.src = "../assets/ball-blue.png"

	this.x;
	this.y;
};

Ball.prototype.getX = function() {
	return this.x;
};

Ball.prototype.getY = function(){
	return this.y;
};

Ball.prototype.setX = function(x){
	thix.x = x;
}

Ball.prototype.setY = function(y){
	this.y = y;
}

Ball.prototype.render = function(){
	gameContext.drawImage(this.image, this.getX(), this.getY());
};