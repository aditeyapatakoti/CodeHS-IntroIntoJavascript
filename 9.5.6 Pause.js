var ball;
var dx = 4;
var dy = 4;
var isPaused = false;

/* This program has a ball bounce around the screen. */
function start(){
    ball = new Circle(20);
    ball.setPosition(100, 100);
    add(ball);
    mouseClickMethod(pause);
    setTimer(draw, 20);
}
function draw(){
    checkWalls();
    ball.move(dx, dy);
}
function checkWalls(){
    // Bounce off right wall
    if(ball.getX() + ball.getRadius() > getWidth()){
        dx = -dx;
        ball.setColor(Randomizer.nextColor());
    }
    // Bounce off left wall
    if(ball.getX() - ball.getRadius() < 0){
    dx = -dx;
    ball.setColor(Randomizer.nextColor());
    }
    // Bounce off bottom wall
    if(ball.getY() + ball.getRadius() > getHeight()){
    dy = -dy;
    ball.setColor(Randomizer.nextColor());
    }
    // Bounce off top wall
    if(ball.getY() - ball.getRadius() < 0){
    dy = -dy;
    ball.setColor(Randomizer.nextColor());
    }
}
function pause(e){
    isPaused = !isPaused;
    if(isPaused == true){
        stopTimer(draw);
        ball.setColor(Randomizer.nextColor());
    }else{
        setTimer(draw, 20);
        ball.setColor(Randomizer.nextColor());
    }
}
