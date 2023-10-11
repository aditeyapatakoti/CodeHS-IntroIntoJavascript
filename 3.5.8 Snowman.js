/* Constants representing the radius of the top, middle,
 * and bottom snowball. */
var BOTTOM_RADIUS = 100;
var MID_RADIUS = 60;
var TOP_RADIUS = 30;
function start(){
	var bCirc = new Circle(BOTTOM_RADIUS);
bCirc.setPosition(getWidth()/2, getHeight() - BOTTOM_RADIUS);
bCirc.setColor(Color.grey);
add(bCirc);
var mCirc = new Circle(MID_RADIUS);
mCirc.setPosition(getWidth()/2, getHeight() - (BOTTOM_RADIUS*2+MID_RADIUS));
mCirc.setColor(Color.grey);
add(mCirc);
var tCirc = new Circle(TOP_RADIUS);
tCirc.setPosition(getWidth()/2, getHeight() - (BOTTOM_RADIUS*2+MID_RADIUS*2+TOP_RADIUS));
tCirc.setColor(Color.grey);
add(tCirc);
}
