function start() {
    goUp();
}
//comment :)
function goUp(){
    turnLeft();
    putBall();
    move();
    putBall();
    move();
    putBall();
    turnAround();
    move();
    move();
    turnLeft();
    if(frontIsClear()){
        move();
    }
    if(frontIsClear()){
        move();
        goUp();
    }
}
