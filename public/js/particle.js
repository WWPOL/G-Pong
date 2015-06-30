Particle = function(l){
	this.location = l.get();
	this.acceleration = new Vector2(0,0);
	this.velocity = new Vector2(Math.random()*2-1,Math.random()*2-1);
	this.lifespan = 1;
	this.lifespan2 = 255;
	this.radius = Math.random()*8
	this.color = -2
}

Particle.prototype.applyForce = function(f) {
	this.acceleration.add(f);
};

Particle.prototype.update = function() {

	this.velocity.add(this.acceleration);
	this.location.add(this.velocity);
	this.lifespan2 -= 2;
	this.lifespan -= .012
	this.acceleration.mult(0);
};

Particle.prototype.render = function(color) {
	if(this.color === -2){
		this.color = color;
	}
	gameContext.beginPath();
	gameContext.arc(this.location.x, this.location.y, this.radius, 0, Math.PI * 2);
	gameContext.globalAlpha = this.lifespan;
	console.log()
	if(this.color === -1){
		gameContext.fillStyle="rgb("+this.lifespan2+","+this.lifespan2+","+this.lifespan2+")";
	}else if(this.color === 0){
		gameContext.fillStyle="rgb(0,0,"+ this.lifespan2 +")";
	}else if(this.color === 1){
		gameContext.fillStyle="rgb("+this.lifespan2+",0,0)";
	}
	gameContext.fill();
	gameContext.globalAlpha = 1.0
};

Particle.prototype.isDead = function() {
	if(this.lifespan < 0){
		return true;
	}else{
		return false;
	}
};

