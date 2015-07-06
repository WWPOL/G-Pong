getGravityVector = function(obj1, obj2){
	var distance = Math.sqrt((obj2.x - obj1.location.x)*(obj2.x - obj1.location.x)+(obj2.y - obj1.location.y)*(obj2.y - obj1.location.y))
	var force = 2 * (5 + 50)/(5 + 50 + (distance * distance)).toFixed(3);
	force = Math.min(force, 5);
	console.log(force);
	var angle = Math.atan2((obj2.y + obj2.radius)-(obj1.location.y + obj1.radius), (obj2.x + obj2.radius)-(obj1.location.x + obj1.radius)).toFixed(3);
	var xComponent = force * Math.cos(angle);
	var yComponent = force * Math.sin(angle);
	return new Vector2(xComponent, yComponent);
};