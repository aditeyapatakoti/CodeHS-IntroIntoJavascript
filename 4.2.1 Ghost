// Constants for main ghost body
var HEAD_RADIUS = 70;
var BODY_WIDTH = HEAD_RADIUS * 2;
var BODY_HEIGHT = 120;
var NUM_FEET = 3;
var FOOT_RADIUS = (BODY_WIDTH) / (NUM_FEET * 2);
var BODY_COLOR = Color.red;

// Constants for eyes
var PUPIL_RADIUS = 8;
var PUPIL_LEFT_OFFSET = 16;
var PUPIL_RIGHT_OFFSET = 40;
var EYE_RADIUS = 20;
var EYE_OFFSET = 28;
var EYE_COLOR = Color.white;
var PUPIL_COLOR = Color.blue;

/* This program draws a ghost on the canvas. */
function start(){
    var centerX = getWidth()/2;
    var centerY = getHeight()/2;
    drawGhost(centerX,centerY, Color.red);
    var footMiddle = new Circle(FOOT_RADIUS);
    footMiddle.setColor(Color.RED);
    add(footMiddle);
    var foot2 = new Circle(FOOT_RADIUS);
    foot2.setPosition(centerX + FOOT_RADIUS*2, centerY + BODY_HEIGHT + FOOT_RADIUS/8);
    foot2.setColor(Color.RED);
    add(foot2);
    var foot3 = new Circle(FOOT_RADIUS);
    foot3.setPosition(centerX - FOOT_RADIUS*2, centerY + BODY_HEIGHT + FOOT_RADIUS/8);
    foot3.setColor(Color.RED);
    add(foot3);
}
//function which basically draws the ghost.
function drawGhost(centerX, centerY, color){
    drawBody(centerX, centerY, color);
    drawEye(centerX-EYE_OFFSET, centerY);
    drawEye(centerX+EYE_OFFSET, centerY);
}
//function draws eye
function drawEye(x,y){
    drawCircle(x, y, EYE_RADIUS, Color.white);
    drawCircle(x+PUPIL_LEFT_OFFSET, y, PUPIL_RADIUS, Color.blue);
}
function drawBody(x,y,col){
    drawCircle(x,y,HEAD_RADIUS,col);
    drawRect(x-HEAD_RADIUS, y, BODY_WIDTH, BODY_HEIGHT, col);
}
function drawCircle(x,y,rad,col){
    var circle = new Circle(rad);
    circle.setPosition(x,y);
    circle.setColor(col);
    add(circle);
}
function drawRect(x,y,w,h,col){
    var rect = new Rectangle(w,h);
    rect.setPosition(x,y);
    rect.setColor(col);
    add(rect);
}
