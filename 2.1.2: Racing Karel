/* This program will have Karel run around the racetrack
 * 8 times. */
function start() {
    for(var i = 0; i < 3; i++){
        line();
        turnLeft();
    }
    while (frontIsClear()){
        move();
    }
    turnLeft();
}    
function line(){
    if (noBallsPresent()){
          for(var i = 0; i < 8; i++){
               putBall();
        }
    }
    while (frontIsClear()){
        move();
    }
    if (noBallsPresent()){
        for(var i = 0; i < 8; i++){
            putBall();
        }
    }
}
function random(){
    move();
}
