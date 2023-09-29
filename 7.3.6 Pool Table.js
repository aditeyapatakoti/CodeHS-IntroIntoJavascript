var POOL_BALL_RADIUS = 40;
var POOL_BALL_FONT = "30pt Arial";

function start(){
	drawPoolBall(Color.orange, 5, 100, 100);
	drawPoolBall(Color.green, 6, 50, 200);
	drawPoolBall(Color.red, 3, 150, 350);
	drawPoolBall(Color.blue, 2, 250, 140);

	// Add some more pool balls!
}

function drawPoolBall(color, num, x, y){
    var ball = new Circle(POOL_BALL_RADIUS);
    ball.setColor(color);
    ball.setPosition(x, y);
    add(ball);
    var number = new Text(num);
    number.setFont("POOL_BALL_FONT");
    number.setColor(Color.white);
    number.setPosition(x - (ball.getWidth() / 8), y + (ball.getHeight() / 8));
    add(number);
}
