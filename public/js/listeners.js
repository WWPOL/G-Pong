//Socket.io event listeners

socket.on("clientNum", function(num){
	clientNum = num;
	clientInfo.setClientNum(num);
});

socket.on("start", function() {
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

	ball.x = info.ball.x;
	ball.y = info.ball.y;

	well1.x = info.well1.x;
	well1.y = info.well1.y;

	well2.x = info.well2.x;
	well2.y = info.well2.y;

	paddle1.y = info.paddle1Y;
	paddle2.y = info.paddle2Y;
});