function start(){
	var line = new Line(1,1,2,2);
	line.setColor(Color.red);
	add(line); var circle = new Circle(30);
	circle.setPosition(100,50);
	circle.setColor(Color.blue);
	add(circle);
	var rect = new Rectangle(200,100);
	rect.setPosition(60,150);
	rect.setColor(Color.red);
	add(rect);
}
