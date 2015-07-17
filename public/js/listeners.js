// Socket.io event listeners

socket.on("clientNum", function(num) {
    clientNum = num;
});

socket.on("start", function() {
    state = "ready";
    main();
});

socket.on("update", function() {
    console.log("update");
});

socket.on("spectator", function() {
    spectator = true
    main();
});

socket.on("serverInfo", function(info) {
    paddle1.y = info.paddle1Y;
    paddle2.y = info.paddle2Y;

    ball.x = info.ballX;
    ball.y = info.ballY;

    if (clientNum === 0) {
        well1.x = info.well1X;
        well1.y = info.well1Y;
        well2.x = info.well2X;
        well2.y = info.well2Y;
    } else if (clientNum === 1) {
        well2.x = info.well2X;
        well2.y = info.well2Y;
        well1.x = info.well1X;
        well1.y = info.well1Y;
    }

    countdown = info.countdown;

    score1 = info.score1;
    score2 = info.score2;

    ballController = info.ballController;
});

socket.on("startCountdown", function() {
	// We select a random phrase of encouragement.
    state = "normal"
	encouragementIndex = Math.floor(Math.random() * encouragement.length);
});

socket.on("winRedirect", function() {
    alert("You win!");
    window.location = "http://i.imgur.com/mXYzUaU.png";
});

socket.on("loseRedirect", function() {
    alert("You lose!");
    window.location = "http://i.imgur.com/kk1yZ8i.png";
});
