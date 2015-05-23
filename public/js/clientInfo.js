ClientInfo = function(well1, clientNum){
	this.well = well
	this.clientNum = clientNum;
};

ClientInfo.prototype.getWell = function() {
	return this.well;
};

ClientInfo.prototype.getClientNum = function(){
	return this.clientNum;
}

ClientInfo.prototype.setWellX = function(x) {
	this.well.setX = x;
};

ClientInfo.prototype.setWellY = function(y){
	this.well.setY = y;
};