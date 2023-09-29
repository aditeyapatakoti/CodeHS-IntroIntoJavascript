//constant fuction, keeps track of the amount of rolls till the acheieved snake eyes.
var numRolls = 0;
function start(){
	while(true){
	    numRolls += 1;
	    var roll1 = Randomizer.nextInt(1,6);
	    var roll2 = Randomizer.nextInt(1,6);
	    println('Rolled: ' + roll1 + ' ' + roll2);
	    if(roll1 && roll2 == 1){
	        break;
	    }
	}
	println('It took you ' + numRolls + ' rolls to get snake eyes.');
}
