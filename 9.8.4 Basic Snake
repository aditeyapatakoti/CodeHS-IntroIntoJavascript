var SNAKE_WIDTH = 40;
var SNAKE_HEIGHT = 40;
var SNAKE_COLOR = Color.green;
// Constants to represent the directions
var EAST = 0;
var SOUTH = 1;
var WEST = 2;
var NORTH = 3;
var snake;
var direction;
var dx = 0;
var dy = 0;
//start function
function start(){
    snake = new Rectangle(SNAKE_WIDTH, SNAKE_HEIGHT);
    snake.setPosition(getWidth()/2 + SNAKE_WIDTH/2 - SNAKE_WIDTH ,getHeight()/2 + SNAKE_HEIGHT/2 - SNAKE_HEIGHT);
    snake.setColor(SNAKE_COLOR);
    add(snake);
    setTimer(moveSnake, 20);
    keyDownMethod(changeDirection);
}
function moveSnake(){
    snake.move(dx, dy);
    if (direction == NORTH){
        dx = 0;
        dy = -2;
    }
    if (direction == EAST){
        dx = 2;
        dy = 0;
    }
    if (direction == SOUTH){
        dx = 0;
        dy = 2;
    }
    if (direction == WEST){
        dx = -2;
        dy = 0;
    }
}
function changeDirection(e){
    if (e.keyCode == Keyboard.UP){
        direction = NORTH;
    } else if (e.keyCode == Keyboard.RIGHT){
        direction = EAST;
    } else if (e.keyCode == Keyboard.DOWN){
        direction = SOUTH;
    } else if (e.keyCode == Keyboard.LEFT){
        direction = WEST;
    }
}
