//Socket.io event listeners

socket.on("start", function() {
	alert("game start");
});

socket.on("full", function () {
	alert("Sorry! Server is full!");
	window.location.replace("https://google.com");
});