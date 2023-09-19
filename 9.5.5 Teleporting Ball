var ball;
var dx = 4;
var dy = 4;

function start(){
    ball = new Circle(20);
    mouseClickMethod(position);
    add(ball);
    setTimer(draw, 20);
}

function position(e) {
    ball.setPosition(e.getX(), e.getY());
}
function draw(){
    checkWalls();
    ball.move(dx, dy);
}
function checkWalls(){
    // Bounce off right wall
    if(ball.getX() + ball.getRadius() > getWidth()){
	    dx = -dx;
	    ball.setColor(Randomizer.nextColor());
}
// Bounce off left wall
if(ball.getX() - ball.getRadius() < 0){
	dx = -dx;
	ball.setColor(Randomizer.nextColor());
}
// Bounce off bottom wall
if(ball.getY() + ball.getRadius() > getHeight()){
	dy = -dy;
	ball.setColor(Randomizer.nextColor());
}
// Bounce off top wall
if(ball.getY() - ball.getRadius() < 0){
	dy = -dy;
	ball.setColor(Randomizer.nextColor());
}
}
