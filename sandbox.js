var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
	res.sendFile(__dirname + '/sandbox.html');
});


var users = [];

io.on("connection", function (socket) {
	console.log("User " + socket.id + " joined");
	users.push(socket.id);
	console.log(users.length + " users connected");

	var gameList = [];
	Object.keys(io.sockets.adapter.rooms).forEach(function(game) {
        var isclient = false;
        users.forEach(function(client){
            if (game === client) {
                isclient = true;
            }
        });
        if (isclient === false) {
            gameList.push(game);
        }
    });
	socket.emit("localID", socket.id);
	io.sockets.emit("gameList", gameList);

	socket.on("joinGame", function(gameID){
		socket.join(gameID);
		socket.emit("gameJoined");
	});

	socket.on("createGame", function(gameID){
		socket.join(gameID);
		socket.emit("gameCreated", gameID);
	})

	socket.on("disconnect", function () {
		console.log("User " + socket.id + " left");
		users.splice(users.indexOf(socket.id));
		console.log(users.length + " users connected");
	});

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
	sendToAll();	
	setTimeout(update, 50);
}


