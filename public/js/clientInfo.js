ClientInfo = function(well){
	this.well = well;
};

ClientInfo.prototype.getWell = function() {
	return this.well;
};

ClientInfo.prototype.setWellX = function(x) {
	this.well.setX = x;
};

ClientInfo.prototype.setWellY = function(y){
	this.well.setY = y;
}