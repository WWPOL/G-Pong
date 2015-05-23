calculateGravityVector = function(obj1, obj2){
	var distance = Math.sqrt((obj2.getX() - obj1.getX())*(obj2.getX() - obj1.getX())+(obj2.getY() - obj1.getY())*(obj2.getY() - obj1.getY()))
	var force = 4 * (obj1.getMass() + obj2.getMass())/(obj1.getMass() + obj2.getMass() + (distance * distance)).toFixed(3);
	var angle = calculateAngleBetween(obj1, obj2).toFixed(3);
	var vector = new Vector(undefined, undefined, angle, force);
	//console.log(force);
	return new Vector(undefined, undefined, angle, force);
}

performGravity = function(obj1, obj2){
	var vector = calculateGravityVector(obj1, obj2);
	obj1.movement.addVector(vector);
}

calculateAngleBetween = function(obj1, obj2){
	return Math.atan2((obj2.getY() - obj1.getY()), (obj2.getX() - obj1.getX()));
}

module.exports = {
    calculateGravityVector: calculateGravityVector,
    performGravity: performGravity,
    calculateAngleBetween: calculateAngleBetween
}