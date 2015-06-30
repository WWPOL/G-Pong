Vector2 = function(x, y){
	this.x = x;
	this.y = y;
};

Vector2.prototype.add = function(v){
	this.x += v.x;
	this.y += v.y;
};

Vector2.prototype.sub = function(v) {
	this.x -= v.x;
	this.y -= v.y;
};

Vector2.prototype.mult = function(s) {
	this.x *= s;
	this.y *= s;
};

Vector2.prototype.div = function(s) {
	this.x /= s;
	this.y /= s;
};

Vector2.prototype.mag = function() {
	return Math.sqrt(this.x*this.x + this.y*this.y);
};

Vector2.prototype.setMag = function(m){
	s = m / this.mag();
	this.x /= s;
	this.y /= s;
}

Vector2.prototype.normalize = function(){
	this.x = this.x / this.mag();
	this.y = this.y / this.mag();
}

Vector2.prototype.heading = function() {
	return Math.atan2(this.y, this.x);
};

Vector2.prototype.rotate = function(a) {
	this.x = this.mag() * Math.cos(this.heading() + a);
	this.y = this.mag() * Math.sin(this.heading() + a);
};

Vector2.prototype.dot = function(v) {
	return this.x * v.x + this.y * v.y;
};

Vector2.prototype.limit = function(max) {
	if(this.mag() > max){
		this.setMag(max);
	}
};

Vector2.prototype.get = function() {
	return new Vector2(this.x, this.y);
};

Vector2.random2D = function(){
	randA = (Math.random() * (2 * Math.PI));
	randX = Math.cos(randA);
	randY = Math.sin(randA)
	return new Vector2(randX, randY);
}