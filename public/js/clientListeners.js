gameCanvas.addEventListener('mousemove', function(e){
	if(spectator == false){
		rect = gameCanvas.getBoundingClientRect(); //get bounding rectangle
		mouseX = e.clientX - rect.left;
		mouseY = e.clientY - rect.top;
		clientInfo.x = mouseX;
		clientInfo.y = mouseY;
		socket.emit("clientInfo", clientInfo);
	}
});