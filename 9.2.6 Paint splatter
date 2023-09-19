// Constants
 var CIRCLES_PER_SPLATTER = 20;
 var MIN_RADIUS = 5;
 var MAX_RADIUS = 25;
 var DELAY = 500;

/* This program creates a paint splatter.
 * It's art. */
function start(){
    setTimer(splatter,500);
}
function splatter(){
    for(var i = 0; i < 20; i++){
        var paintSpot = new Circle(Randomizer.nextInt(5,25));
        paintSpot.setColor(Randomizer.nextColor());
        paintSpot.setRadius(Randomizer.nextInt(5,25));
        paintSpot.setPosition(Randomizer.nextInt(0,getWidth()),Randomizer.nextInt(0,getHeight()));
        add(paintSpot);
    }
}
