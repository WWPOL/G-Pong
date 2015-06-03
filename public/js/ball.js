Ball = function(radius) {
	this.imageNone = new Image();
	this.imageNone.src = "../assets/ball-none.png";

    this.imageBlue = new Image();
    this.imageBlue.src = "../assets/ball-blue.png"

    this.imageRed = new Image();
    this.imageRed.src = "../assets/ball-red.png";

    this.x;
    this.y;
    this.radius = radius;
};

Ball.prototype.render = function(index) {
	var image = this.imageNone;

	if (index === -1) {
		image = this.imageNone;
	} else if (index === 0) {
		image = this.imageBlue;
	} else if (index === 1) {
		image = this.imageRed;
	}

    gameContext.drawImage(image, this.x, this.y, this.radius * 2, this.radius * 2);
};