$(window).load(function(){
	$("#loading").css("opacity", "0.0");
	$("canvas").css("display", "none");
	setTimeout(function(){
		$("#loading").css("display", "none");
	});
});

var socket = io();
var localID = null;

$("#joinbutton").click(function(){
	$("#buttoncontainer").css("opacity", "0.0");
	setTimeout(function(){
		$("#buttoncontainer").css("display", "none");
		$("#inputcontainer").css("opacity", "1.0");
	}, 500)
});

$("#hostbutton").click(function(){
	var gameid = Math.floor(Math.random()*900000) + 100000;
	socket.emit("createGame", gameid);
	$("#menu").css("opacity", "0.0");
	$("#loading").css("display", "flex");
	$("#loading").css("opacity", "1.0");
	setTimeout(function(){
		$("#menu").css("display", "none");
	}, 500);
});

$("#submit").click(function(){
	var gameid = $("#gameid").val();
	if (gameid !== "" && gameid !== undefined && gameid !== null) {
		socket.emit("joinGame", gameid);
		$("#menu").css("opacity", "0.0");
		$("#loading").css("display", "flex");
		$("#loading").css("opacity", "1.0");
		setTimeout(function(){
			$("#menu").css("display", "none");
		}, 500);
	} else {
		alert("You need to enter a Game ID!");
	}
	
});

socket.on("localID", function(id){
	localID = id;
});

socket.on("gameJoined", function(){
	$("#loading").css("opacity", "0.0");
	setTimeout(function(){
		$("#loading").css("display", "none");
	});
	alert("You're in!")
});

socket.on("gameCreated", function(gameid){
	$("#iddisplay h1").html("Join the game at: " + gameid);
	$("#loading").css("opacity", "0.0");
	setTimeout(function(){
		$("#loading").css("display", "none");
	});
	$("#iddisplay").css("margin", "0 auto");
});

var gameCanvas = document.getElementById("c");
var gameContext = gameCanvas.getContext("2d");

var ball = new Ball(20, 20, 10, new Vector(1,0, null, null));
var paddle = new Paddle(0);

var main = function(){
	now = Date.now();
	delta = now - then;

	update(delta/1000);
	render();

	requestAnimationFrame(main);
}

var update = function(delta){
	ball.update(delta);
}

var render = function(){
	gameContext.clearRect(0,0,gameCanvas.width,gameCanvas.height);
	ball.render();
	paddle.render();
}

then = Date.now();
main();