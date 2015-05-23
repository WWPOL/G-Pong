var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//add class files for game objects
var Ball = require("./server_classes/ball.js");
var Paddle = require("./server_classes/paddle.js");
var Vector = require("./server_classes/vector.js");
var ServerInfo = require("./server_classes/serverInfo.js");
var ClientInfo = require("./server_classes/clientInfo.js");
var G = require("./server_classes/gravityFunctions.js");

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});


var users = [];

/*var game = new Server(...);*/ //declare game object

io.on("connection", function (socket) {
	console.log("User " + socket.id + " joined");
	users.push(socket.id);
	console.log(users.length + " users connected");

	io.to(socket.id).emit("clientNum", users.length-1); //give an ID number to the client

	socket.on("disconnect", function () {
		console.log("User " + socket.id + " left");
		users.splice(users.indexOf(socket.id));
		console.log(users.length + " users connected");
	});

	if (users.length == 2) { //when 2 players connect, start game
		console.log("Starting game with users " + users);
		io.emit("start");
		update(); 
	}

	if (users.length > 2) { //if there's already two players, kick anyone else
		console.log("Server is full, goodbye " + socket.id);
		io.to(socket.id).emit("full");
		socket.disconnect();
	}

	socket.on("clientInfo", function (clientInfo) {
		if(clientInfo.getClientNum() == 0){
			serverInfo.well1.x = clientInfo.well.x;
			serverInfo.well1.y = clientInfo.well.y;
		}else{
			serverInfo.well2.x = clientInfo.well.x;
			serverInfo.well2.y = clientInfo.well.y;
		}
	});
});

http.listen(7777, function(){
	console.log("listening on port 7777");
});

var testBall = new Ball(50, 50, 10, 10, new Vector(1,0,null,null))
var testPaddle1Y = 40;
var testPaddle2Y = 40;
var testWell1 = new Ball(90, 90, 20, 50, new Vector(0,0,null,null))
var testWell2 = new Ball(200, 90, 20, 50, new Vector(0,0,null,null))
var serverInfo = new ServerInfo(testPaddle1Y, testPaddle2Y, testBall, testWell1, testWell2);

var sendToAll = function(type, obj) {
	//console.log("updating");
	io.emit(type, obj);
}

var update = function() {
	performGravity(serverInfo.getBall(), serverInfo.getWell1());
	performGravity(serverInfo.getBall(), serverInfo.getWell2());
	serverInfo.getBall().update();
	sendToAll("serverInfo", serverInfo);	
	setTimeout(update, 50);
}

