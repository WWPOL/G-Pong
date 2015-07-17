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

gameCanvas.addEventListener('click', function(e) {
	rect = gameCanvas.getBoundingClientRect();
	var clickX = e.clientX - rect.left;
	var clickY = e.clientY - rect.top;

	if(state === "ready" && clickX > gameCanvas.width/2 - 100 && clickX < gameCanvas.width/2 + 100 && clickY > gameCanvas.height/2 - 50 && clickY < gameCanvas.height/2 + 50){
		console.log("Clicked Ready!");
		socket.emit("ready");
		gameCanvas.style.cursor = "none";
		state = "waiting"
	}
}, false);