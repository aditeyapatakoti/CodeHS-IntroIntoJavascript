var NUM_CIRCLES = 30;
var BIG_RADIUS = 180;

function start() {
	var radiusOne = BIG_RADIUS;
	for(var i = 0; i < NUM_CIRCLES; i++){
	    var circle = new Circle(BIG_RADIUS - BIG_RADIUS * i / NUM_CIRCLES);
	    circle.setPosition(getWidth()/2, getHeight() - (BIG_RADIUS - BIG_RADIUS * i / NUM_CIRCLES));
	    circle.setColor(Randomizer.nextColor());
	    add(circle);
	}
}
