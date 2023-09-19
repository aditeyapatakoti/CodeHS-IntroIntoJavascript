/* Constants */
var START_RADIUS = 1;
var INCREMENT = 1;
var CHANGE_COLORS_AT = 10;
var circle = new Circle(START_RADIUS);
function start(){
    var x = getWidth()/2;
    var y = getHeight()/2;
    circle.setPosition(x,y);
    add(circle);
    setTimer(grow,50);
}
function grow(){
    var size = circle.getRadius();
    size = size + INCREMENT;
    circle.setRadius(size);
    if(size% 10 ==1){
        var color = Randomizer.nextColor();
        circle.setColor(color);
    }
    if(size == getWidth()/2){
        stopTimer(grow);
    }
}
