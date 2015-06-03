Vector = function(x, y, theta, magnitude) {
    if (typeof x !== "undefined" && typeof y !== "undefined") {
        this.x = x;
        this.y = y;
        this.updatePolar();
    } else if (typeof theta !== "undefined" && typeof magnitude !== "undefined") {
        this.theta = theta;
        this.magnitude = magnitude;
        this.updateComponent();
    }
};

Vector.prototype.addVector = function(vector) {
    this.x += vector.getX();
    this.y += vector.getY();
    this.updatePolar();
};

Vector.prototype.updatePolar = function() {
    this.theta = Math.atan2(this.y, this.x);
    this.magnitude = Math.sqrt(this.x * this.x + this.y * this.y);
};

Vector.prototype.updateComponent = function() {
    this.x = this.magnitude * Math.cos(this.theta);
    this.y = this.magnitude * Math.sin(this.theta);
};

Vector.prototype.setX = function(x) {
    this.x = x;
    this.updatePolar();
};

Vector.prototype.setY = function(y) {
    this.y = y;
    this.updatePolar();
};

Vector.prototype.setTheta = function(theta) {
    this.theta = theta
    this.magnitude = Math.sqrt(this.x * this.x + this.y * this.y);
    this.updateComponent();
};

Vector.prototype.setMagnitude = function(magnitude) {
    this.magnitude = magnitude;
    this.updateComponent();
};

Vector.prototype.getX = function() {
    return this.x;
};

Vector.prototype.getY = function() {
    return this.y;
};

Vector.prototype.getTheta = function() {
    return this.theta;
};

Vector.prototype.getMagnitude = function() {
    return this.magnitude;
};

module.exports = Vector;
