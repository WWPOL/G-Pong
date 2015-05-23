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

var addVector(vector){
	this.x += vector.getX();
	this.y += vector.getY();
	updatePolar();
}

var updatePolar = function(){
	this.theta = Math.atan2(this.y, this.x);
	this.magnitude = Math.sqrt(this.x * this.x + this.y * this.y);
};

var updateComponent = function()){
	this.x = magnitude * Math.cos(theta);
	this.y = magnitude * Math.sin(theta);
};

var setX = function(x){
	this.x = x;
	updatePolar();
};

var setY = function(y){
	this.y = y;
	updatePolar();
};

var setTheta = function(theta){
	this.theta = theta
	this.magnitude = Math.sqrt(this.x * this.x + this.y * this.y);
	updateComponent();
};

var setMagnitude = function(magnitude){
	this.magnitude = magnitude;
	updateComponent();
};

var getX = function(){
	return this.x;
};

var getY = function(){
	return this.y;
};

var getTheta = function(){
	return this.theta;
};

var getMagnitude = function(){
	return this.magnitude
};
