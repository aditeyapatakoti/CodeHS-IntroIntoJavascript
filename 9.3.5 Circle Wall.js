// Constants
var RADIUS = 20;
var DELAY = 40;
var yPos = RADIUS;
var xPos = RADIUS;
var counter = 0;

// Define your global variables here

function start(){
	setTimer(draw,DELAY);
}
function draw(){
    var circle = new Circle(RADIUS);
    circle.setPosition(xPos, yPos);
    if(counter % 2 == 0){
        circle.setColor(Color.red);
    }
    counter++;
    add(circle);
    xPos += 2*RADIUS;
    if(xPos > getWidth()){
        xPos = RADIUS;
        yPos += 2*RADIUS;
    }
    if(yPos > getHeight()){
        stopTimer(draw);
    }
}
