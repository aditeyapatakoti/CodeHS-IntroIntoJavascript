// This program draws a target that follows the mouse
var x;
var horizontalLine;
var verticalLine;
var y;
//start function
function start(){
    mouseClickMethod(redBall);
    mouseMoveMethod(setEndpoint);
}
function setEndpoint(e) {
    x = e.getX();
    y= e.getY();
    horizontalLine = new Line(0, y, getWidth(), y);
    horizontalLine.setLineWidth(1);
    add(horizontalLine);
    verticalLine = new Line(x, 0, x, getHeight());
    verticalLine.setLineWidth(1);
    add(verticalLine);
    removeAll();
    horizontalLine = new Line(0, y, getWidth(), y);
    horizontalLine.setLineWidth(1);
    add(horizontalLine);
    verticalLine = new Line(x, 0, x, getHeight());
    verticalLine.setLineWidth(1);
    add(verticalLine);
}
function redBall(e) {
    var ball = new Circle(10);
    ball.setPosition(e.getX(), e.getY());
    ball.setColor(Color.red);
    add(ball);
}
