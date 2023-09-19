// Constants for main ghost body
var HEAD_RADIUS = 35;
var BODY_WIDTH = HEAD_RADIUS * 2;
var BODY_HEIGHT = 60;
var NUM_FEET = 3;
var FOOT_RADIUS = (BODY_WIDTH) / (NUM_FEET * 2); 

// Constants for eyes
var PUPIL_RADIUS = 4;
var PUPIL_LEFT_OFFSET = 8; // This is how far left the pupil should be from the center of the ghost
var PUPIL_RIGHT_OFFSET = 20; // This is how far right the pupil should be from the center of the ghost
var EYE_RADIUS = 10;
var EYE_OFFSET = 14; // This is how far left or right the eye should be from the center of the ghost

//Custom Constant
var things = ["200", "240", "red", "100", "100", "green", "300", "200", "black", "40", "300", "orange", "300", "50", "yellow"];

//Start function
function start(){
for (var i = 0; i < 5; i++) drawTheGhost(parseInt(things[i*3], 10), parseInt(things[i*3+1],10), (things[i*3+2]));
}

//Function which draws the ghost
function drawTheGhost(centerX, centerY, color){
drawThing("circle", HEAD_RADIUS, color, centerX, centerY, 0 );
drawThing("rect", BODY_WIDTH, color, centerX - BODY_WIDTH / 2, centerY, BODY_HEIGHT);
drawThing("circle", EYE_RADIUS, Color.white,centerX - EYE_OFFSET, centerY, 0)
drawThing("circle", EYE_RADIUS, Color.white, centerX + EYE_OFFSET, centerY, 0)
drawThing("circle", PUPIL_RADIUS, Color.blue, centerX - PUPIL_LEFT_OFFSET, centerY, 0)
drawThing("circle", PUPIL_RADIUS, Color.blue, centerX + PUPIL_RIGHT_OFFSET, centerY, 0)
for (var i=0; i<NUM_FEET; i++) drawThing("circle", FOOT_RADIUS, color, centerX - HEAD_RADIUS + FOOT_RADIUS + i* 2 *FOOT_RADIUS, centerY+ BODY_HEIGHT, 0);
}

//Function which draws thing
function drawThing(item, dim1, color, centerX, centerY, dim2){
var thing = item == "circle" ? new Circle(dim1) : new Rectangle(dim1, dim2);
thing.setColor(color);
thing.setPosition(centerX, centerY);
add(thing);
}
