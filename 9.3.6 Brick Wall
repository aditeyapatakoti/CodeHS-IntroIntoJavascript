// Constants
var WIDTH = 50;
var HEIGHT = 20;
var Y = getHeight()-HEIGHT;
var X = 0;
var counter = 0;
//start function
function start() {
    setTimer(red,50);
}
//draw red brick function
function red(){
    var red = new Rectangle(WIDTH,HEIGHT);
    red.setPosition(X,Y);
    red.setColor(Color.randomRed());
    //counter++;
    add(red);
    X+=WIDTH;
    if (X>getWidth()){
        X=(0);
        Y-=HEIGHT;
    }
    if(Y<0){
        stopTimer(red);
    }
}
