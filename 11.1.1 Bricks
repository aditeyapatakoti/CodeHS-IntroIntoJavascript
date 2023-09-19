/* Constants for bricks */
var NUM_ROWS = 8;
var BRICK_TOP_OFFSET = 10;
var BRICK_SPACING = 2;
var NUM_BRICKS_PER_ROW = 10;
var BRICK_HEIGHT = 10;
var SPACE_FOR_BRICKS = getWidth() - (NUM_BRICKS_PER_ROW + 1) * BRICK_SPACING;
var BRICK_WIDTH = SPACE_FOR_BRICKS / NUM_BRICKS_PER_ROW;
/* Constants for ball and paddle */
var PADDLE_WIDTH = 80;
var PADDLE_HEIGHT = 15;
var PADDLE_OFFSET = 10;
var BALL_RADIUS = 15;

//start function
function start(){
    drawBricks();
}

//function which draws bricks (not actually, the start function does the actual well command)
function drawBricks(){
    for(var j = 0; j < NUM_ROWS;j++){
        for(var i = 0; i < NUM_BRICKS_PER_ROW; i++){
            var brick = new Rectangle(BRICK_WIDTH, BRICK_HEIGHT);
            if((j + 1) % 8 == 1 || (j + 1) % 8 == 2){
                brick.setColor(Color.RED);
            }else if((j + 1) % 8 == 3 || (j + 1) % 8 == 4){
                brick.setColor(Color.ORANGE);
            }else if((j + 1) % 8 == 5 || (j + 1) % 8 == 6){
                brick.setColor(Color.GREEN);
            }else if ((j + 1) % 8 == 7 || (j + 1) % 8 == 0){
                brick.setColor(Color.BLUE);
            }
        brick.setPosition(BRICK_WIDTH * i + BRICK_SPACING * (1 + i), BRICK_TOP_OFFSET + BRICK_HEIGHT * j + BRICK_SPACING * (1 + j));
        print(i);
        add(brick);
        }
    }
}
