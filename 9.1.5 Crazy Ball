var RADIUS = 100;
var ball;
function start(){
	setTimer(crazy,100);
}
function crazy(){
    var x = Randomizer.nextInt(RADIUS,getWidth()-RADIUS);
    var y = Randomizer.nextInt(RADIUS, getWidth()-RADIUS);
    ball = new Circle(RADIUS);
    ball.setPosition(x,y);
    ball.setColor(Randomizer.nextColor());
    add(ball);
}
