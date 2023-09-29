//global aka constant vars
var BALL_RADIUS = 30;
var line;
var ball = new Circle(BALL_RADIUS);
var line = new Line(getWidth() / 2, getHeight() / 2,getWidth() / 2, getHeight() / 2,)
//start function
function start() {
yellowBall();
mouseMoveMethod(leash);
}
//creates the yellow ball
function yellowBall(){  
ball.setPosition(getWidth() / 2, getHeight() / 2)
ball.setColor(Color.yellow)
add(ball);
}
//creates the leash (a line which follows the yellow ball)
function leash(e){  
line.setEndpoint(e.getX(), e.getY());
ball.setPosition(e.getX(), e.getY())
add(line);
}
