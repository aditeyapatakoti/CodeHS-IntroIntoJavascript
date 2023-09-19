//global vars
var RADIUS = 25;
var DX_RED = 6;
var DX_BLUE = 4;
var DELAY = 40;
var blueBall;
var redBall;
var colided = false;
var stopped = true;

//start function
function start(){
    blueBall = drawBall(RADIUS, Color.blue, 50, getHeight() / 2);
    redBall = drawBall(RADIUS, Color.red, getWidth() / 2, getHeight() / 2);
    mouseClickMethod(click);
}

//draws each balls
function drawBall(radius, color, x, y){
    var ball = new Circle(radius);
    ball.setPosition(x, y);
    ball.setColor(color);
    add(ball);
    return ball;
}

//moves the balls
function click(e){
    if ( stopped ) {
        setTimer(moveBalls, DELAY);
        stopped = false;
    } else {
        stopTimer(moveBalls);
        stopped = true;
    }
}
//moves blue ball
function moveBalls(){
    if (blueBall.getX() >= (redBall.getX() - RADIUS - RADIUS)) {
        colided = true;
    }
    if (colided) {
        blueBall.move(DX_BLUE, 0);
        redBall.move(DX_RED, 0);
    }
    else {
        blueBall.move(DX_BLUE, 0);
    }
}
