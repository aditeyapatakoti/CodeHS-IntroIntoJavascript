//NOTE: I have tried many things but can't get this code to fully work. Please help if you can provide a solution!
//Thanks, Aditeya






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

// Variables for ball and paddle
var ball;
var paddle;

// Variables for ball speed
var ballXSpeed = 2; // Adjust the initial horizontal speed as needed
var ballYSpeed = 2; // Adjust the initial vertical speed as needed

// Start function
function start() {
    drawBricks();
    setupGame();
}

// Function which draws bricks
function drawBricks() {
    for (var j = 0; j < NUM_ROWS; j++) {
        for (var i = 0; i < NUM_BRICKS_PER_ROW; i++) {
            var brick = new Rectangle(BRICK_WIDTH, BRICK_HEIGHT);
            if ((j + 1) % 8 == 1 || (j + 1) % 8 == 2) {
                brick.setColor(Color.RED);
            } else if ((j + 1) % 8 == 3 || (j + 1) % 8 == 4) {
                brick.setColor(Color.ORANGE);
            } else if ((j + 1) % 8 == 5 || (j + 1) % 8 == 6) {
                brick.setColor(Color.GREEN);
            } else if ((j + 1) % 8 == 7 || (j + 1) % 8 == 0) {
                brick.setColor(Color.BLUE);
            }
            brick.setPosition(BRICK_WIDTH * i + BRICK_SPACING * (1 + i), BRICK_TOP_OFFSET + BRICK_HEIGHT * j + BRICK_SPACING * (1 + j));
            add(brick);
        }
    }
}

// Function to set up the game (initialize ball and paddle)
function setupGame() {
    // Create the ball
    ball = new Circle(BALL_RADIUS);
    ball.setPosition(getWidth() / 2, getHeight() / 2);
    ball.setColor(Color.BLACK);
    add(ball);

    // Create the paddle
    paddle = new Rectangle(PADDLE_WIDTH, PADDLE_HEIGHT);
    paddle.setPosition((getWidth() - PADDLE_WIDTH) / 2, getHeight() - PADDLE_OFFSET - PADDLE_HEIGHT);
    paddle.setColor(Color.BLACK);
    add(paddle);

    // Event handler for mouse movement to control the paddle
    onMouseMoved(mouseMoved);
}

// Function to update the ball's position and handle bouncing
function updateBall() {
    var ballX = ball.getX();
    var ballY = ball.getY();

    // Update the ball's position
    ballX += ballXSpeed;
    ballY += ballYSpeed;

    // Bounce the ball off the walls
    if (ballX <= 0 || ballX >= getWidth() - BALL_RADIUS * 2) {
        ballXSpeed = -ballXSpeed;
    }

    if (ballY <= 0 || ballY >= getHeight() - BALL_RADIUS * 2) {
        ballYSpeed = -ballYSpeed;
    }

    ball.setPosition(ballX, ballY);
}

// Function to handle mouse movement and control the paddle
function mouseMoved(e) {
    var mouseX = e.getX();
    var paddleX = mouseX - PADDLE_WIDTH / 2;

    // Ensure the paddle stays within the screen bounds
    if (paddleX < 0) {
        paddleX = 0;
    } else if (paddleX > getWidth() - PADDLE_WIDTH) {
        paddleX = getWidth() - PADDLE_WIDTH;
    }

    paddle.setPosition(paddleX, getHeight() - PADDLE_OFFSET - PADDLE_HEIGHT); // Set the Y-coordinate to keep the paddle at the bottom
}

// Call the updateBall function in a loop to continuously update the ball's position
setInterval(updateBall, 20); // Adjust the interval for the desired frame rate
