normalRender = function(){

    pArray.forEach(function(p){
        p.render(ballController);
    });

    gameContext.font = "30px Ubuntu";
    gameContext.fillStyle = "white";

    gameContext.fillText(score1, SCORE_X, SCORE_Y);
    gameContext.fillText(score2, gameCanvas.width - SCORE_X, SCORE_Y);

    paddle1.render();
    paddle2.render();

    well1.render(0);
    well2.render(1);
    ball.render(ballController);

    // We render the countdown information.
    if (countdown !== 0) {
        var textWidth = gameContext.measureText(countdown).width;
        gameContext.fillText(countdown, (gameCanvas.width / 2) - (textWidth / 2), gameCanvas.height / 2);

        if (score1 > score2) {
            gameContext.fillText("red " + encouragement[encouragementIndex], 200, 200);
        } else if (score2 > score1) {
            gameContext.fillText("blue " + encouragement[encouragementIndex], 200, 200);
        }
    }
}

mainMenuRender = function(){
	gameContext.beginPath();
	gameContext.rect(gameCanvas.width/2 - 100, gameCanvas.height/3, 200, 100);
	gameContext.rect(gameCanvas.width/2 - 100, gameCanvas.height*2/3, 200, 100);
	gameContext.stroke();
	gameContext.font = "30px Arial";
	gameContext.fillStyle = "black";
	gameContext.fillText("Create Game", gameCanvas.width/2 - 90, gameCanvas.height/3 + 60);
	gameContext.fillText("Join game", gameCanvas.width/2 - 65, gameCanvas.height*2/3 + 60);
}

readyUpRender = function(){
	gameContext.beginPath();
	gameContext.rect(gameCanvas.width/2 - 100, gameCanvas.height/2 - 50, 200, 100);
	gameContext.stroke();
	gameContext.font = "40px Arial";
    gameContext.fillStyle = "black";
	gameContext.fillText("Ready Up", gameCanvas.width/2 - 90, gameCanvas.height/2 + 20)
}

waitingRender = function(){
	gameContext.font = "40px Arial";
    gameContext.fillStyle = "black";
	gameContext.fillText("Wating for Other Player", gameCanvas.width/2 - 200, gameCanvas.height/2 + 20)
}

createMenuRender = function(){

}

joinMenuRender = function(){
	gameContext.font = "30px Arial";
	gameContext.fillStyle = "black";
	gameContext.fillText("Enter in Game Code", gameCanvas.width/2 - 130, gameCanvas.height/3);


	gameContext.fillText("Join Game", gameCanvas.width/2 - 70, gameCanvas.height*2/3 + 60);
	gameContext.beginPath();
	gameContext.rect(gameCanvas.width/2-100, gameCanvas.height*2/3, 200, 100);
	gameContext.stroke();

	var input = document.createElement("input");
}