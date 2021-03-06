collision = function(ball, paddle) {
    ballCX = ball.x + ball.radius;
    ballCY = ball.y + ball.radius;
    if (paddle.x <= ballCX && ballCX <= paddle.x + paddle.width) { //Top Side
        if (Math.abs(paddle.y - ballCY) <= ball.radius) {
            return true;
        }
    }
    if (Math.pow(paddle.x - ballCX, 2) + Math.pow(paddle.y - ballCY, 2) <= Math.pow(ball.radius, 2) ||
        Math.pow((paddle.x + paddle.width) - ballCX, 2) + Math.pow(paddle.y - ballCY, 2) <= Math.pow(ball.radius, 2)) {
        return true;
    }

    if (paddle.y <= ballCY && ballCY <= paddle.y + paddle.height * 2) { //Right Side
        if (Math.abs((paddle.x + paddle.width) - ballCX) <= ball.radius) {
            return true;
        }
    }

    if (Math.pow((paddle.y - ballCY), 2) + Math.pow((paddle.x + paddle.width) - ballCX, 2) <= Math.pow(ball.radius, 2) ||
        Math.pow((paddle.y + paddle.height * 2) - ballCY, 2) + Math.pow((paddle.x + paddle.width) - ballCX, 2) <= Math.pow(ball.radius, 2)) {
        return true;
    }

    if (paddle.x <= ballCX && ballCX <= paddle.x + paddle.width) { //Bottom Side
        if (Math.abs((paddle.y + paddle.height * 2) - ballCY) <= ball.radius) {
            return true;
        }
    }

    if (Math.pow(paddle.x - ballCX, 2) + Math.pow(paddle.y + paddle.height * 2 - ballCY, 2) <= Math.pow(ball.radius, 2) ||
        Math.pow((paddle.x + paddle.width) - ballCX, 2) + Math.pow(paddle.y + paddle.height * 2 - ballCY, 2) <= Math.pow(ball.radius, 2)) {
        return true;
    }

    if (paddle.y <= ballCY && ballCY <= paddle.y + paddle.height * 2) { //Left Side
        if (Math.abs((paddle.x) - ballCX) <= ball.radius) {
            return true;
        }
    }

    if (Math.pow((paddle.y - ballCY), 2) + Math.pow((paddle.x) - ballCX, 2) <= Math.pow(ball.radius, 2) ||
        Math.pow((paddle.y + paddle.height * 2) - ballCY, 2) + Math.pow((paddle.x) - ballCX, 2) <= Math.pow(ball.radius, 2)) {
        return true;
    }

    return false;
};

module.exports = {
    collision: collision
}