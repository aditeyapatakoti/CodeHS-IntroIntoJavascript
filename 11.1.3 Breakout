var PADDLE_WIDTH = 80;
var PADDLE_HEIGHT = 15;
var PADDLE_OFFSET = 10;

var BALL_RADIUS = 15;

var NUM_ROWS = 8;
var BRICK_TOP_OFFSET = 10;
var BRICK_SPACING = 2;
var NUM_BRICKS_PER_ROW = 8;
var BRICK_HEIGHT = 10;
var BRICK_WIDTH = (getWidth() - (NUM_BRICKS_PER_ROW + 1) 
	* BRICK_SPACING) / NUM_BRICKS_PER_ROW;

var paddle, ball;
var vx; 
var vy = 8;
var gameOver = false;
var NUM_TURNS = 3;
var turnsLeft = NUM_TURNS;
var bricksLeft = NUM_ROWS * NUM_BRICKS_PER_ROW;


function setupBall(){
	ball = new Circle(BALL_RADIUS);
	ball.setPosition(getWidth()/2, getHeight()/2);
	add(ball);
}

function setupPaddle(){
	paddle = new Rectangle(PADDLE_WIDTH, PADDLE_HEIGHT);
	paddle.setPosition(getWidth()/2 - paddle.getWidth()/2, 
		getHeight() - paddle.getHeight() - PADDLE_OFFSET);
	add(paddle);
}

function getColorForRow(rowNum){
	rowNum = rowNum % 8;
	if(rowNum <= 1){
		return Color.red;
	}else if(rowNum > 1 && rowNum <= 3){
		return Color.orange; 
	}else if(rowNum > 3 && rowNum <= 5){
		return Color.green;
	}else{
		return Color.blue;
	}
}

function drawBrick(x, y, color){
	var brick = new Rectangle(BRICK_WIDTH, BRICK_HEIGHT);
	brick.setPosition(x, y);
	brick.setColor(color);
	add(brick);
}

function drawRow(rowNum, yPos){
	var xPos = BRICK_SPACING;
	for(var i = 0; i < NUM_BRICKS_PER_ROW; i++){
		drawBrick(xPos, yPos, getColorForRow(rowNum));
		xPos += BRICK_WIDTH + BRICK_SPACING;
	}
}

function drawBricks(){
	var yPos = BRICK_TOP_OFFSET;
	for(var i = 0; i < NUM_ROWS; i++){
		drawRow(i, yPos);
		yPos += BRICK_HEIGHT + BRICK_SPACING;
	}
}

function setSpeeds(){
	vx = Randomizer.nextInt(2, 7);
	if(Randomizer.nextBoolean())
		vx = -vx;
}

function setup(){
	drawBricks();
	setupPaddle();
	setupBall();
	setSpeeds();
}


function checkWalls(){
	if(ball.getX() - ball.getRadius() < 0 || 
	ball.getX() + ball.getRadius() > getWidth()){
		vx = -vx;
	}
	if(ball.getY() - ball.getRadius() < 0){
		vy = -vy;
	}

	if(ball.getY() + ball.getRadius() > getHeight()){
		gameOver = true;
	}
}

function getCollidingObject(){
	var left = ball.getX() - ball.getRadius();
	var right = ball.getX() + ball.getRadius();
	
	var top = ball.getY() - ball.getRadius();
	var bottom = ball.getY() + ball.getRadius();
	
	var topLeft = getElementAt(left, top);
	if(topLeft) return topLeft;
	
	var topRight = getElementAt(right, top);
	if(topRight) return topRight;
	
	var bottomLeft = getElementAt(left, bottom);
	if(bottomLeft) return bottomLeft;
	
	var bottomRight = getElementAt(right, bottom);
	if(bottomRight) return bottomRight;
}

function checkObjects(){
	var elem = getCollidingObject();
	if(elem != null){
		if(elem != paddle){
			remove(elem);
			vy = -vy;
			bricksLeft--;
		}else{
			vy = -Math.abs(vy);
		}
	}
}

function drawGameOver(){
	var text = new Text("Game over", "25pt Arial");
	text.setPosition(getWidth()/2 - text.getWidth()/2, getHeight()/2);
	add(text);
}

function drawGameWon(){
	var text = new Text("You Win!", "25pt Arial");
	text.setPosition(getWidth()/2 - text.getWidth()/2, getHeight()/2);
	add(text);
}

function checkWin(){
	if(bricksLeft == 0){
		stopTimer(draw);
		drawGameWon();
	}
}

function checkLose(){
	/* This is unfortunately confusing now to
	   play multiple times... */
	if(gameOver){
		turnsLeft--;
		remove(ball);
		if(turnsLeft == 0){
			stopTimer(draw);				
			drawGameOver();
		}
		else{
			stopTimer(draw);
			waitForClick();
			setTimer(draw, 40);
			setupBall();
			setSpeeds();
			gameOver = false;
		}
	}	
}

function draw(){
	checkWalls();
	checkObjects();
	ball.move(vx, vy);
	checkWin();
	checkLose();
}

function myMove(event){
	var x = event.getX() - paddle.getWidth()/2;
	if(x < 0) 
		x = 0;
	if(x + paddle.getWidth() > getWidth())
		x = getWidth() - paddle.getWidth();
	paddle.setPosition(x, paddle.getY());
}

function start(){
	setup();
	//waitForClick();
	setTimer(draw, 25);
	mouseMoveMethod(myMove);
}
