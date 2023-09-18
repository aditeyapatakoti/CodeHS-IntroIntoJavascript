/* This program has karel lay a diagonal row of tennis balls. 
 * However, the indenting is all wrong. Can you properly 
 * indent this program? */
function start(){
    // Loop will keep Karel building a diagonal path of balls
    // until the final wall is reached.
    while(frontIsClear()){
        putBall();
        move();
        turnLeft();
        move();
        for(var i = 0; i < 3; i++){
            turnLeft();
        }
    }
    putBall();
}
