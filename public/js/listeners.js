//Socket.io event listeners

socket.on("clientNum", function(num){
	clientNum = num;
	clientInfo.setClientNum(num);
});

socket.on("start", function() {
	alert("READY?");
	socket.emit("ready");
	main();
	countdown = true;
});

socket.on("update", function () {
	console.log("update");
});

socket.on("spectator", function () {
	spectator = true
	main();
});

socket.on("countdown", function(){
	countdown = true;
});

socket.on("serverInfo", function(info){
	serverInfo = info;

	score1 = info.score1;
	score2 = info.score2;

	ball.lastHit = info.ball.lastHit;

	paddle1.dead = info.paddle1Dead;
	paddle2.dead = info.paddle2Dead;

	ball.x = info.ball.x;
	ball.y = info.ball.y;

	well1.x = info.well1.x;
	well1.y = info.well1.y;

	well2.x = info.well2.x;
	well2.y = info.well2.y;

	paddle1.y = info.paddle1Y;
	paddle2.y = info.paddle2Y;
});

socket.on("winRedirect", function(){
	alert("You win!");
	window.location = "http://i.imgur.com/mXYzUaU.png";
});

socket.on("loseRedirect", function(){
	alert("You lose!");
	window.location = "http://i.imgur.com/kk1yZ8i.png";
});