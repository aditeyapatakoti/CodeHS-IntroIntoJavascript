// This program draws some balloons
//constant variables
var MIN_RADIUS = 20;
var MAX_RADIUS = 40;
var NUM_BALLOONS = 25;
var centerX = getWidth()/2
var y = getHeight()/1.5;
var xFull = getWidth()-40;
//start function
function start() {
	for(var i = 0; i < NUM_BALLOONS; i++){
	    var x2 = Randomizer.nextInt(40,xFull);
	    var y2 = Randomizer.nextInt(40, y-100);
	    var radius = Randomizer.nextInt(MIN_RADIUS,MAX_RADIUS);
	    drawBalloons(x2,y2,radius);
	}
}
//function which draws balloons at a certain spot on the canvas and with a certain radius
function drawBalloons(x2,y2,radius){
    var line = new Line(centerX,y,x2,y2);
    add(line);
    var balloon = new Circle(radius);
    balloon.setColor(Randomizer.nextColor());
    balloon.setPosition(x2,y2);
    add(balloon);
}
