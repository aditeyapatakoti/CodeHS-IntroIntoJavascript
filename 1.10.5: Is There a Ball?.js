// Karel should put a ball on the first spot
// if there isn't one already there and then move.
function start() {
    hasBallTrue();
    hasBallFalse();
    move();
}
function hasBallTrue(){
    if (ballsPresent()){
        
    }
}
function hasBallFalse(){
    if (noBallsPresent()){
        putBall();
    }
}
