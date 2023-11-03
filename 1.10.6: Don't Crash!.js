function start() {
    if (frontIsBlocked()){
        turnLeft();
        move();
    } else {
        move();
    }
}
