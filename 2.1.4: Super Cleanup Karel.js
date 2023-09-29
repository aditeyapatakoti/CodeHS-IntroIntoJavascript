function start() {
	if (frontIsBlocked()){
	    turnLeft();
	}
	sweep();
	turnAround();
	begRow();
	turnAround();
	for(var i = 0; i < 23; i++){
	    if (leftIsBlocked()){
	        //this just makes the dog go in a circle (didn't want to leave the if statement empty soo...)
	        turnAround();
	        turnAround();
	    } else {
	        turnLeft();
	        move();
	        turnRight();
	        //cleans the row then comes back
            cleanup();
	    }
	}
	turnRight();
	while (frontIsClear()){
	    move();
	}
    if (facingSouth()){
        turnLeft();
    }
    if (facingNorth()){
        turnRight();
    }
    if (facingWest()){
        turnAround();
    }

}
//sweeps the street
function sweep(){
    while (frontIsClear()){
        if (ballsPresent()){
            takeBall();
        }
        move();
        if (frontIsBlocked()){
            if (ballsPresent()){
                takeBall();
            }
        }
    }
}
//goes back (1,y)
function begRow(){
    while (frontIsClear()){
        move();
    }
}
//**THE ONLY FUNCTION NEEDED TO CLEAN A ROW** (MAIN ONE)
function cleanup(){
    sweep();
    turnAround();
    begRow();
    turnAround();
}
