var SIDE_LENGTH = 100;
var color = Randomizer.nextColor();
function start(){
    var rect= new Rectangle(SIDE_LENGTH,SIDE_LENGTH);
    rect.setPosition(getWidth()/2-SIDE_LENGTH/2 , getHeight()/2-SIDE_LENGTH);
    rect.setColor(color);
    add(rect);
}
