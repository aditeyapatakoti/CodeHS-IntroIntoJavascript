//global vars
var NUM_CIRCLES = 3;
var RADIUS = 30;

//start function
function start(){
	drawCircles();
    mouseDownMethod(drag);
    mouseDragMethod(dragTwo);
    mouseUpMethod(drop);
}

// This function draws a number of random colored circles at random points 
// on the screen based on the variable NUM_CIRCLES
function drawCircles() {
	for (var i = 0; i < NUM_CIRCLES; i++) {
		var circle = new Circle(RADIUS);
		var x = Randomizer.nextInt(RADIUS, getWidth() - RADIUS);
		var y = Randomizer.nextInt(RADIUS, getHeight() - RADIUS);
		circle.setPosition(x, y);
		circle.setColor(Randomizer.nextColor());
		add(circle);
	}
}
//null var
var newPos = null;

//function which lets u drag the ball
function drag(e){
    newPos = getElementAt(e.getX(), e.getY());
}

//function which drops/let goes of the ball when you are not clicking on it
function drop(e){
    newPos = null;
}

//function for dragging the other balls
function dragTwo(e){
    newPos.setPosition(e.getX(), e.getY());
}
