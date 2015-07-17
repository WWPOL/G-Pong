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

readyRender = function(){
	gameContext.beginPath();
	gameContext.lineWidth = "6";
	gameContext.rect(gameCanvas.width/2 - 100, gameCanvas.height/2 - 50, 200, 100);
	gameContext.stroke();
	gameContext.font = "40px Arial";
	gameContext.fillText("Ready Up", gameCanvas.width/2 - 90, gameCanvas.height/2 + 20)
}

waitingRender = function(){
	gameContext.font = "40px Arial";
	gameContext.fillText("Wating for Other Player", gameCanvas.width/2 - 200, gameCanvas.height/2 + 20)
}