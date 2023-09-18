/* This program creates a staircase from the first spot all the
 * way across the world for any sized world.
 *
 * This program works, but its indentation is completely wrong.
 * 
 * Run the program first, so you know what it does and don't break it.
 */
function start(){
    putBall();
    // Loop continues until Karel reaches the end wall
    while(frontIsClear()){
        turnLeft();
        // Loop moves Karel up the step created with balls
        while (ballsPresent()) {
            move();
        }

        turnRight();
        move();
        // Once in place, Karel will create the new step
        createStep();
    }
}
// This function has Karel starting at the top of a new step, turns right,
// then moves down placing balls at each location, stopping at the bottom
function createStep() {
    turnRight();
    putBall();
    while (frontIsClear()) {
        move();
        putBall();
    }
    turnLeft();
}
