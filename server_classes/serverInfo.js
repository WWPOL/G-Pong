ServerInfo = function(paddle1Y, paddle2Y, ball, well1, well2){
	this.paddle1Y = paddle1Y;
	this.paddle2Y = paddle2Y;
	this.ball = ball;
	this.well1 = well1;
	this.well2 = well2;
	this.score1 = 0;
	this.score2 = 0;
	this.paddle1Active = false;
	this.paddle2Active = true;
}

//--------------------------------------------------- Getters

ServerInfo.prototype.getPaddle1Y = function() {
	return this.paddle1Y;
};

ServerInfo.prototype.getPaddle2Y = function() {
	return this.paddle2Y;
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

ServerInfo.prototype.setPaddle1Y = function(paddle1Y) {
	this.paddle1Y = paddle1Y;
};

ServerInfo.prototype.setPaddle2Y = function(paddle2Y) {
	this.paddle2Y = paddle2Y;
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

module.exports = ServerInfo;