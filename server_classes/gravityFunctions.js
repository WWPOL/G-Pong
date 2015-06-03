calculateGravityVector = function(obj1, obj2){
	var distance = Math.sqrt((obj2.x - obj1.x)*(obj2.x - obj1.x)+(obj2.y - obj1.y)*(obj2.y - obj1.y))
	var force = 4 * (obj1.mass + obj2.mass)/(obj1.mass + obj2.mass + (distance * distance)).toFixed(3);
	var angle = calculateAngleBetween(obj1, obj2).toFixed(3);
	var vector = new Vector(undefined, undefined, angle, force);
	if(force > 1){
		force = 1;
	}
	return new Vector(undefined, undefined, angle, force);
}

performGravity = function(obj1, obj2){
	var vector = calculateGravityVector(obj1, obj2);
	obj1.movement.addVector(vector);
}

calculateAngleBetween = function(obj1, obj2){
	return Math.atan2(((obj2.y + obj2.height / 2) - (obj1.y + obj1.height / 2)), ((obj2.x + obj2.width / 2) - (obj1.x + obj1.width / 2)));
}

module.exports = {
    calculateGravityVector: calculateGravityVector,
    performGravity: performGravity,
    calculateAngleBetween: calculateAngleBetween
}