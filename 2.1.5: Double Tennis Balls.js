//start function
function start(){
    move();
    doubleBalls();
    move();
    turnAround();
    putBack();
    move();
    move();
    turnAround();
    dance();
}
function doubleBalls(){
    while (ballsPresent()){
        takeBall();
        move();
        putBall();
        putBall();
        turnAround();
        move();
        turnAround();
    }
}
function putBack(){
    while (ballsPresent()){
        takeBall();
        move();
        putBall();
        //putBall();
        turnAround();
        move();
        turnAround();
    }
}
function dance(){
    turnAround();
    turnAround();
}
