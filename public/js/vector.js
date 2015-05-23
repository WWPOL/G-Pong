Vector = new function(x, y, theta, magnitude){
	if(typeof x !== null && typeof y !== null){
		this.x = x;
		this.y = y;
		updatePolar();
	}else if(typeof theta !== null && typeof magnitude !== null){
		this.theta = theta;
		this.magnitude = magnitude;
		updateComponent();
	}
};

var Vector.prototype.addVector(vector){
	this.x += vector.getX();
	this.y += vector.getY();
	updatePolar();
}

var Vector.prototype.updatePolar = function(){
	this.theta = Math.atan2(this.y, this.x);
	this.magnitude = Math.sqrt(this.x * this.x + this.y * this.y);
};

var Vector.prototype.updateComponent = function()){
	this.x = magnitude * Math.cos(theta);
	this.y = magnitude * Math.sin(theta);
};

var Vector.prototype.setX = function(x){
	this.x = x;
	updatePolar();
};

var Vector.prototype.setY = function(y){
	this.y = y;
	updatePolar();
};

var Vector.prototype.setTheta = function(theta){
	this.theta = theta
	this.magnitude = Math.sqrt(this.x * this.x + this.y * this.y);
	updateComponent();
};

var Vector.prototype.setMagnitude = function(magnitude){
	this.magnitude = magnitude;
	updateComponent();
};

var Vector.prototype.getX = function(){
	return this.x;
};

var Vector.prototype.getY = function(){
	return this.y;
};

var Vector.prototype.getTheta = function(){
	return this.theta;
};

var Vector.prototype.getMagnitude = function(){
	return this.magnitude
};
