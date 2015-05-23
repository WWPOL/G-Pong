var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//add class files for game objects
//var Ball = require("./server_classes/ball.js");
var Paddle = require("./server_classes/paddle.js");
var Vector = require("./server_classes/vector.js");
var ServerInfo = require("./server_classes/serverInfo.js");
var ClientInfo = require("./server_classes/clientInfo.js");
var G = require("./server_classes/gravityFunctions.js");
var C = require("./server_classes/collisions.js");

Ball = function(x, y, radius, mass, movement, paddle1, paddle2) {
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.mass = mass;
	this.movement = movement;
	this.paddle1 = paddle1;
	this.paddle2 = paddle2;
};

Ball.prototype.getX = function() {
	return this.x;
};

Ball.prototype.getY = function(){
	return this.y;
};

Ball.prototype.getRadius = function(){
	return this.radius
}

Ball.prototype.setX = function(x){
	thix.x = x;
}

Ball.prototype.setY = function(y){
	this.y = y;
}

Ball.prototype.getMass = function(){
	return this.mass;
};

Ball.prototype.getMovement = function(){
	return this.movement;
};

Ball.prototype.update = function(delta) {
	if (C.collision(this, this.paddle1) && this.paddle1.canColide == true) {
		this.movement.setX(-this.movement.getX());
		randomInt = Math.random() * (620);
		serverInfo.setPaddle1Y(randomInt);
		this.paddle1.y = randomInt
		serverInfo.ball.lastHit = 0;
		wall1Active = false;
		wall2Active = true;
	}
	if (C.collision(this, this.paddle2) && this.paddle2.canColide == true) {
		this.movement.setX(-this.movement.getX());
		randomInt = Math.random() * (620);
		serverInfo.setPaddle2Y(randomInt);
		this.paddle2.y = randomInt
		serverInfo.ball.lastHit = 1
		wall1Active = true;
		wall2Active = false;
	}

	if(this.x < 0){
		if(wall1Active){
			serverInfo.score2++;
		}
		this.movement.setX(Math.abs(this.movement.getX()))
	}
	if(this.x + (2*this.radius) > 1280){
		if(wall2Active){
			serverInfo.score1++;
		}
		this.movement.setX(-Math.abs(this.movement.getX()))
	}
	if(this.y < 0){
		this.movement.setY(Math.abs(this.movement.getY()))
	}
	if(this.y + (2*this.radius) > 720){
		this.movement.setY(-Math.abs(this.movement.getY()))
	}

	this.x += this.movement.getX();
	this.y += this.movement.getY();

	
};

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});


var users = [];
var readyCount = 0;
/*var game = new Server(...);*/ //declare game object

io.on("connection", function (socket) {
	console.log("User " + socket.id + " joined");
	users.push(socket.id);
	console.log(users.length + " users connected");

	socket.emit("clientNum", users.length-1); //give an ID number to the client
	console.log("Assigned " + socket.id + " to the number of " + (users.length - 1));

	socket.on("disconnect", function () {
		console.log("User " + socket.id + " left");
		users.splice(users.indexOf(socket.id));
		console.log(users.length + " users connected");
		readyCount = 0;
	});

	if (users.length == 2) { //when 2 players connect, start game
		io.emit("start");
	}

	socket.on("ready", function () {
		if (users.length == 2) {
			console.log(socket.id + " READY");
			readyCount++;
			if (readyCount == 2) {
				console.log("Starting game with users " + users);
				update(); 
			}
		}
	});

	if (users.length > 2) { //if there's already two players, kick anyone else
		console.log("Server is full, goodbye " + socket.id);
		io.to(socket.id).emit("full");
		socket.disconnect();
	}

	socket.on("clientInfo", function (clientInfo) {
		if(clientInfo.clientNum === 0){
			serverInfo.well1.x = clientInfo.x - serverInfo.well1.radius;
			serverInfo.well1.y = clientInfo.y - serverInfo.well1.radius;
			if(serverInfo.well1.x + (serverInfo.well1.radius * 2) > 640){
				serverInfo.well1.x = 640 - (serverInfo.well1.radius * 2);
			}
		}else{
			serverInfo.well2.x = clientInfo.x - serverInfo.well2.radius;
			serverInfo.well2.y = clientInfo.y - serverInfo.well2.radius;
			if(serverInfo.well2.x < 640){
				serverInfo.well2.x = 640;
			}
		}
	});
});

http.listen((process.env.PORT || 7777), function(){
	console.log("listening on port 7777");
});

var testPaddle1 = new Paddle(0);
var testPaddle2 = new Paddle(1);
var testBall = new Ball(50, 50, 10, 10, new Vector(5,0,null,null), testPaddle1, testPaddle2);
var testWell1 = new Ball(90, 90, 20, 50, new Vector(0,0,null,null))
var testWell2 = new Ball(200, 90, 20, 50, new Vector(0,0,null,null))
var serverInfo = new ServerInfo(testPaddle1.getY(), testPaddle2.getY(), testBall, testWell1, testWell2);

var wall1Active = true;
var wall2Active = true;

var sendToAll = function(type, obj) {
	//console.log("updating");
	io.emit(type, obj);
}

var update = function() {
	performGravity(serverInfo.getBall(), serverInfo.getWell1());
	performGravity(serverInfo.getBall(), serverInfo.getWell2());
	
	serverInfo.getBall().update();
	sendToAll("serverInfo", serverInfo);	
	setTimeout(update, 15);
}
