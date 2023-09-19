//global vars
var NUM_RECTANGLES_ACROSS = 4;
var NUM_RECTANGLES_DOWN = 10;
var rect;
var RECT_LENGTH = getWidth()/ NUM_RECTANGLES_ACROSS;
var RECT_WIDTH = getHeight()/ NUM_RECTANGLES_DOWN;

//start function
function start(){
    mouseMoveMethod(draw_rect);
}

//function which draws the rectangles
function draw_rect(e){
    var x = Math.floor(e.getX()/RECT_LENGTH)*RECT_LENGTH;
    var y = Math.floor(e.getY()/RECT_WIDTH)*RECT_WIDTH;
    rect = new Rectangle(RECT_LENGTH, RECT_WIDTH);
    rect.setPosition(x,y);
    rect.setColor(Randomizer.nextColor());
    add(rect);
}
