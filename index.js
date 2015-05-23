var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});


var users = [];

io.on("connection", function (socket) {
	console.log("A user joined");
	users.push(socket.id);
	console.log(users.length + " users connected");
});

http.listen(7777, function(){
	console.log("listening on port 7777");
});