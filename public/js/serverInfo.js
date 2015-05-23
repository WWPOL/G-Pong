ServerInfo = function(paddle1, paddle2, ball, well1, well2){
	this.paddle1 = paddle1;
	this.paddle2 = paddle2;
	this.ball = ball;
	this.well1 = well1;
	this.well2 = well2;
	this.score1 = 0;
	this.score2 = 0;
	this.paddle1Dead = false;
	this.paddle2Dead = false;
}

//--------------------------------------------------- Getters

ServerInfo.prototype.getPaddle1 = function() {
	return this.paddle1;
};

ServerInfo.prototype.getPaddle2 = function() {
	return this.paddle2;
};

ServerInfo.prototype.getBall = function() {
	return this.ball;
};

ServerInfo.prototype.getWell1 = function() {
	return this.well1;
};

ServerInfo.prototype.getWell2 = function() {
	return this.well2;
};

//------------------------------------------------------- Setters

ServerInfo.prototype.setPaddle1 = function(paddle1Y) {
	this.paddle1 = paddle1;
};

ServerInfo.prototype.setPaddle2 = function(paddle2Y) {
	this.paddle2 = paddle2;
};

ServerInfo.prototype.setBall = function(ball) {
	this.ball = ball;
};

ServerInfo.prototype.setWell1 = function(well1) {
	this.well1 = well1;
};

ServerInfo.prototype.setWell2 = function(well2) {
	this.well2 = well2;
};