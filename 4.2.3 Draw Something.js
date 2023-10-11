function start(){
	//draws a very small line at the top left corner of the canvas.
	var line = new Line(1,1,2,2);
	line.setColor(Color.red);
	add(line); 
	//draws a blue circle with a radius of 30 at (300,50)(these are the coordinates) on the canvas.
	var circle = new Circle(30);
	circle.setPosition(100,50);
	circle.setColor(Color.blue);
	add(circle);
	//draws a red rectangle with a side lengths of 200 (length), and 100 (width), the position is set at (60,150) on the canvas.
	var rect = new Rectangle(200,100);
	rect.setPosition(60,150);
	rect.setColor(Color.red);
	add(rect);
}
