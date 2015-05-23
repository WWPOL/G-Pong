var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

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

	io.to(socket.id).emit("clientNum", users.length); //give an ID number to the client

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

	socket.on("clientInfo", function () {

	});
});

http.listen(7777, function(){
	console.log("listening on port 7777");
});

var sendToAll = function() {
	console.log("updating");
	io.emit("update");
}

var update = function() {
	performGravity(serverInfo.getBall(), serverInfo.getWell1());
	performGravity(serverInfo.getBall(), serverInfo.getWell2());
	serverInfo.getBall().update();
	sendToAll();	
	setTimeout(update, 50);
}

