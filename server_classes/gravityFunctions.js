calculateGravityVector = function(obj1, ojb2){
	var distance = Math.sqrt((obj2.getX - obj1.getX)*(obj2.getX - obj1.getX)+(obj2.getY - obj1.getY)*(obj2.getY - obj1.getY))
	var force = 10 * (obj1.getMass + obj2.getMass)/(obj1.getMass + obj2.getMass + (distance * distance));
	var angle = calculateAngleBetween(obj1, obj2);
	return new Vector(null, null, angle, force);
}

performGravity = function(obj1, obj2){
	var vector = calculateGravityVector(obj1, obj2);
	obj1.movement.addVector(vector);
}

calculateAngleBetween = function(obj1, obj2){
	return Math.atan2((obj2.getY - obj1.getY), (obj2.getX - obj1.getX));
}

module.exports = {
    calculateGravityVector: calculateGravityVector,
    performGravity: performGravity,
    calculateAngleBetween: calculateAngleBetween
}