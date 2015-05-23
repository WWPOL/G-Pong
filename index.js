var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//add class files for game objects
var ball = require("./server_classes/ball.js");
var paddle = require("./server_classes/paddle.js");
var vector = require("./server_classes/vector.js");
var serverInfo = require("./server_classes/serverInfo.js");
var clientInfo = require("./server_classes/clientInfo.js");
var g = require("./server_classes/gravityFunctions.js");

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
		//update(); 
	}

	if (users.length > 2) { //if there's already two players, kick anyone else
		console.log("Server is full, goodbye " + socket.id);
		io.to(socket.id).emit("full");
		socket.disconnect();
	}

	socket.on("clientInfo", function (clientInfo) {
		if(clientInfo.getClientNum() == 0){
			serverInfo.setWell1(clientInfo.getWell());
		}else{
			serverInfo.setWell2(clientInfo.getWell());
		}
	});
});

http.listen(7777, function(){
	console.log("listening on port 7777");
});

var sendToAll = function(type, obj) {
	console.log("updating");
	io.emit(type, obj);
}

var update = function() {
	performGravity(serverInfo.getBall(), serverInfo.getWell1());
	performGravity(serverInfo.getBall(), serverInfo.getWell2());
	serverInfo.getBall().update();
	sendToAll("serverInfo", serverInfo);	
	setTimeout(update, 50);
}

