//THIS IS ALTERNATIVE #2 FOR THE FINAL PROJECT
//It is a 2 player ping pong game. (This will be the last final project)
//(Unless I ofcourse decide to make more)(most likely won't.)

//Constant and Global Variables.
var height = getHeight();
var width = getWidth();
var coolColor = "#6D8B74";
var coolColor2 = "#D0C9C0";
var P1score = 0;
var P2score = 0;
var dx = 4;
var dy = 4;
var ball;
var number1;
var number2;
var p1paddle;
var p2paddle;

//start function
function start(){
    background();
    scoreboard();
    P1Paddle();
    P2Paddle();
    codes();
    ball = new Circle(10);
    ball.setPosition(width/2,(height + 100)/2);
    ball.setColor(coolColor2);
    add(ball);
    mouseClickMethod(click);
    setTimer(scoreCounter, 20);
    setTimer(scoreboard, 20);
    setTimer(endGame, 180);
}
function click(e){
    setTimer(draw,20);
}
function draw(){
    collision();
    ball.move(dx,dy);
}
function background(){
    var spacing = 4;
    var rect = new Rectangle(width,height);
    rect.setPosition(0,0);
    rect.setColor(coolColor);
    add(rect);
    var line = new Line(0,100,width,100)
    line.setColor(coolColor2)
    line.setLineWidth(2);
    add(line);
    for(var i = 0; i <= 3; i++){
        var grid = new Rectangle(5,height/60);
        grid.setPosition(width/2,spacing);
        grid.setColor(coolColor2);
        add(grid);
        spacing += 16;
    }
}
function scoreboard(){
    remove(number1);
    number1 = new Text(P1score);
    number1.setFont("50pt Impact");
    number1.setColor(coolColor2);
    number1.setPosition(width/5,height/8);
    add(number1);
    remove(number2);
    number2 = new Text(P2score);
    number2.setFont("50pt Impact");
    number2.setColor(coolColor2);
    number2.setPosition(width/5*3.5,height/8);
    add(number2);
}
function collision(){
    //Bounce off right wall
    if(ball.getX() + ball.getRadius() > getWidth()){
        dx = -dx;
        ball.setPosition(width/2,height/2);
    }
    //Bounce off left wall
    if(ball.getX() - ball.getRadius() < 0){
        dx = -dx;
        ball.setPosition(width/2,height/2);
    }
    if(p1paddle.getY() - 5 <= ball.getY()){
        if(p1paddle.getY() + 55 >= ball.getY()){
            if(p1paddle.getX() + 20 >= ball.getX()){
                dx = -dx;
            }
        }
    }
    if(p2paddle.getY() - 5 <= ball.getY()){
        if(p2paddle.getY() + 55 >= ball.getY()){
            if(p2paddle.getX() == ball.getX()){
                dx = -dx;
            }
        }
    }
    if(p1paddle.getY() + 50 >= height){
        p1paddle.setPosition(40,height - 50);
    }
    if(p1paddle.getY() <= 100){
        p1paddle.setPosition(40,height - 50);
    }
    if(p2paddle.getY() + 40 >= height){
        p2paddle.setPosition(width-40,height-50);
    }
    if(p2paddle.getY() <= 100){
        p2paddle.setPosition(width-4,100);
    }

    //Bounce off bottom wall
    if(ball.getY() + ball.getRadius() > getHeight()){
        dy = -dy;
    }
}
function scoreCounter(){
    if(ball.getX() + ball.getRadius() > getWidth()){
        P1score++;
        remove(number1);
    }
    if(ball.getX() - ball.getRadius() < 0){
        P2score++;
        remove(number2);
    }
}
function endGame(){
    if(P1score ==5){
        stopTimer(draw);
        stopTimer(scoreCounter);
        stopTimer(scoreboard);
        var rect = new Rectangle(width,height);
    rect.setPosition(0,0);
    rect.setColor(coolColor);
    add(rect);
    var number = new Text("P1");
    number.setFont("50pt Impact");
    number.setColor(coolColor2);
    number.setPosition(width/2-30,height/2-20);
    add(number);
    var number = new Text("WINS!");
    number.setFont("100pt Impact");
    number.setColor(coolColor2);
    number.setPosition(width/2-150, height/2+100)
    add(number);
    }
    if(P2score == 5){
        stopTimer(draw);
        stopTimer(scoreCounter);
        stopTimer(scoreboard);
        var rect = new Rectangle(width,height);
    rect.setPosition(0,0);
    rect.setColor(coolColor)
    add(rect);
    var number = new Text("P2");
    number.setFont("50pt Impact");
    number.setColor(coolColor2);
    number.setPisition(width/2-30, height/2-20);
    add(number);
    var number = new Text("WINS!");
    number.setFont("100pt Impact");
    number.setColor(coolColor2);
    number.setPosition(width/2-150, height/2+100);
    add(number)
    }
}
function P1Paddle(){
    p1paddle = new Rectangle(10,50);
    p1paddle.setColor(coolColor2);
    p1paddle.setPosition(40, (height+50)/2);
    add(p1paddle);
    keyDownMethod(PaddleDown);
}
function PaddleDown(e){
    if(e.keyCode == Keyboard.letter('S')){
        p1paddle.move(0,25);
    }
    if(e.keyCode == Keyboard.DOWN){
        p2paddle.move(0,-25);
    }
    if(e.keyCode == Keyboard.UP){
        p2paddle.move(0,-25);
    }
}
function P2Paddle(){
    p2paddle = new Rectangle(10,50);
    p2paddle.setColor(coolColor2);
    p2paddle.setPosition(width-40, (height+50)/2);
    add(p2paddle);
    keyDownMethod(PaddleDown);
}
function codes(){
    keyUpMethod(cheatcodes);
}
function cheatcodes(e){
    if(P1score <= 5){
        if (e.keyCode == Keyboard.letter("l")){
            P2score++;
        }
    }
    if(P2score <= 5){
        if (e.keyCode == Keyboard.letter("j")){
            P1score++;
        }
    }
    if(P1score <= 5){
        if(e.keyCode == Keyboard.letter("k")){
            P2score--;
        }
    }
    if(P2score <= 5){
        if (e.keyCode == Keyboard.letter("h")){
            P1score--;
        }
    }
}
