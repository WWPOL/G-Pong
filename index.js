var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var Game = require("./server_classes/game.js");

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

var users = [];
var readyCount = 0;

io.on("connection", function(socket) {
    console.log("User " + socket.id + " has joined.");
    users.push(socket.id);
    console.log(users.length + " users connected");

    socket.emit("clientNum", users.length - 1); //give an ID number to the client
    console.log("Assigned " + socket.id + " to the number of " + (users.length - 1));

    socket.on("disconnect", function() {
        console.log("User " + socket.id + " left");
        users.splice(users.indexOf(socket.id), 1);
        console.log(users.length + " users connected");
        readyCount = 0;
        if(users.length < 2){
            io.emit("disconnect");
        }
    });

    if (users.length == 1){
        io.emit("connect")
    }else if (users.length == 2) { //when 2 players connect, start game
        io.emit("start");
    }

    socket.on("ready", function() {
        if (users.length == 2) {
            console.log(socket.id + " READY");
            readyCount++;
            if (readyCount == 2) {
                console.log("Starting game with users " + users);

                game.reset();
                game.resetScore();
                update(); // Begins the game loop.
            }
        }
    });

    if (users.length > 2) { //if there's already two players, kick anyone else
        io.to(socket.id).emit("spectator");
    }

    socket.on("clientInfo", function(clientInfo) {
        if (clientInfo.clientNum === 0) {
            game.well1.x = clientInfo.wellX;
            game.well1.y = clientInfo.wellY;
            if (game.well1.x + (game.well1.radius * 2) > 640) {
                game.well1.x = 640 - (game.well1.radius * 2);
            }
        } else if (clientInfo.clientNum === 1) {
            game.well2.x = clientInfo.wellX;
            game.well2.y = clientInfo.wellY;
            if (game.well2.x < 640) {
                game.well2.x = 640;
            }
        }
    });
});

http.listen((process.env.PORT || 7777), function() {
    console.log("Listening for connections on port 7777.");
});

var onGameEvent = function(event) {
    switch (event) {
        case "startCountdown":
            io.emit("startCountdown");
            break;
        
        default:
            logerror("Mistakes were made: unknown game event argument.");
            break;
    }
}

var update = function() {
    game.update();
    io.emit("serverInfo", game.serialize());
    setTimeout(update, 15);
}

// We run the game!
var game = new Game(onGameEvent);
