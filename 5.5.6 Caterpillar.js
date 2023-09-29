var NUM_CIRCLES = 15;
var RADIUS = getWidth() / NUM_CIRCLES / 2;
var circleColor = Color.red;
// This graphics program should draw a caterpillar. A caterpillar has NUM_CIRCLES
// circles. Every other circle is a different color, the even circles are red, and
// the odd circles are green. Use a for loop to draw the caterpillar, centered 
// vertically in the screen.
//start function 
function start() {
    for (var i = 0; i < NUM_CIRCLES; i++) {
        var circle = new Circle(RADIUS);
        circle.setColor(circleColor);
        circle.setPosition(RADIUS * i * 2 + RADIUS, getHeight() / 2);
        add(circle);
        
        if (circleColor == Color.green) {
            circleColor = Color.red;
        } else {
            circleColor = Color.green;
        }
    }
}
