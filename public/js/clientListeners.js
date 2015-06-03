gameCanvas.addEventListener('mousemove', function(e){
	if (spectator == false){
		rect = gameCanvas.getBoundingClientRect();
		mouseX = e.clientX - rect.left;
		mouseY = e.clientY - rect.top;

		var clientInfo = {
			wellX: mouseX,
			wellY: mouseY,
			clientNum: clientNum
		}

		socket.emit("clientInfo", clientInfo);
	}
});