var circleRadius = 250;
var squareSide = 500;

function start() {
	while(true){
	    if(circleRadius < 1 ||squareSide < 1){
	        break;
	    }
	var SQ_POS_W = getWidth()/2 - squareSide/2;
	var SQ_POS_H = getHeight()/2 - squareSide/2;
	var square = new Rectangle(squareSide,squareSide);
	var circle = new Circle(circleRadius);
	square.setPosition(SQ_POS_W,SQ_POS_H);
	circle.setPosition(getWidth()/2,getHeight()/2);
	square.setColor(Randomizer.nextColor());
	circle.setColor(Randomizer.nextColor());
	squareSide = ((circleRadius*2)/Math.sqrt(2));
	add(square);
	add(circle);
	}
}
