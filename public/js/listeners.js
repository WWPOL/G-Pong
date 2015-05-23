//Socket.io event listeners

socket.on("clientNum", function(num){
	clientNum = num;
	clientInfo.setClientNum(num);
});

socket.on("start", function() {
	alert("game start");
	main();
});

socket.on("update", function () {
	console.log("update");
});

socket.on("full", function () {
	alert("Sorry! Server is full!");
	window.location.replace("http://i.imgur.com/H4Bxiog.jpg?1");
});

socket.on("serverInfo", function(info){
	serverInfo = info;
});