ClientInfo = function() {
	this.well;
	this.clientNum;
}; 

ClientInfo.prototype.getWell = function() {
	return this.well;
};

ClientInfo.prototype.getClientNum = function(){
	return this.clientNum;
}

ClientInfo.prototype.setWellX = function(x) {
	this.well.setX(x);
};

ClientInfo.prototype.setWellY = function(y){
	this.well.setY(y);
};

ClientInfo.prototype.setClientNum = function(num){
	this.clientNum = num;
}
ClientInfo.prototype.setWell = function(well) {
	this.well = well;
};

