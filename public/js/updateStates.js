normalUpdate = function(delta){
	pArray.push(new Particle(new Vector2(ball.x + ball.radius, ball.y + ball.radius)));
    pArray.forEach(function(p){
        g1 = getGravityVector(p, well1);
        g2 = getGravityVector(p, well2);
        p.applyForce(g1);
        p.applyForce(g2);
        p.update();
        if(p.isDead()){
            index = pArray.indexOf(p);
            pArray.splice(index,1)
        }
    });
}

readyUpUpdate = function(delta){
	
}