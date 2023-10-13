/* This program will play a simple guessing game.
 * The user will guess, and the computer should print if
 * the guess was too high, too low, or correct.
 * If the user enters '-1', the game should exit.
 */
//variable below stops the program if the user enters -1
var SENTINEL = -1;
function start() {
    //line 10,11,12 tell the player some starting information about the game.
    println('This program plays a guessing game.');
    println('The computer is thinking of a value between 0 and 100');
    println('Type "-1" to exit the program' );
    var NUMBER = Randomizer.nextInt(1,100);
    while(true){
        var guess = readLine('What is your guess? ')
        if(guess == SENTINEL){
            break;
        }
        if(guess == NUMBER){
            println('Correct!')
            break;
        //this segment of the code determines if the guess was too high or low.
        }else if(guess > NUMBER){
           println('Your guess was too high.')
        }else if(guess < NUMBER){
            println('Your guess was too low.')
        }
    }
    println('Game has concluded')
}
