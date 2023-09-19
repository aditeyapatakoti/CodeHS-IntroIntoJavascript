var LIGHT_RADIUS = 35;
var STOPLIGHT_WIDTH = 120;
var STOPLIGHT_HEIGHT = 350;
var DIST_BETWEEN_LIGHTS = 100;
var GRAY_COLOR = "#737071";

function start(){
var rect = new Rectangle(STOPLIGHT_WIDTH, STOPLIGHT_HEIGHT);
rect.setPosition(getWidth()/3, getHeight()/5);
rect.setColor(GRAY_COLOR);
add(rect);
drawCircle(LIGHT_RADIUS,Color.red, getWidth()/2.05, getHeight()/3);
drawCircle(LIGHT_RADIUS, Color.yellow, getWidth()/2.05, getHeight()/1.85);
drawCircle(LIGHT_RADIUS, Color.green, getWidth()/2.05, getHeight()/1.85 + DIST_BETWEEN_LIGHTS);
}

function drawCircle(radius, color, x, y){
var circle = new Circle(radius);
circle.setColor(color);
circle.setPosition(x, y);
add(circle);
}
