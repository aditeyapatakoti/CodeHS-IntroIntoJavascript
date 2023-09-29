var NUM_CIRCLES = 15;

// This graphics program should draw a worm. 
// A worm is made up of NUM_CIRCLES circles. 
// Use a for loop to draw the worm, 
// centered vertically in the screen. 
// Also, be sure that the worm is still drawn across 
// the whole canvas, even if the value of NUM_CIRCLES is changed.
function start(){
    var CIR_RADIUS = getWidth()/NUM_CIRCLES/2;
    for (var i = 0; i < NUM_CIRCLES; i++){
        var cir = new Circle(CIR_RADIUS);
        cir.setColor(Color.black);
        cir.setPosition(0+CIR_RADIUS, getHeight()/2)
        add(cir);
    }
}

/* Another way to write this code!:

var NUM_CIRCLES = 15;
var RADIUS = getWidth()/NUM_CIRCLES/2;

function start(){
    for(var i = 0; i < NUM_CIRCLES; i++){
        var circle = new Circle(RADIUS);
        circle.setColor(Color.black);
        circle.setPosition(RADIUS*i*2+RADIUS,getHeight()/2);
        add(circle);
    }   
}
*/
