//Socket.io event listeners

socket.on("clientNum", function(num){
	clientNum = num;
	clientInfo.setClientNum(num);
});

socket.on("start", function() {
	alert("game start");
});

socket.on("update", function () {
	console.log("update");
});

socket.on("full", function () {
	alert("Sorry! Server is full!");
	window.location.replace("https://google.com");
});

socket.on("serverInfo", function(info){
	serverInfo = info;
});