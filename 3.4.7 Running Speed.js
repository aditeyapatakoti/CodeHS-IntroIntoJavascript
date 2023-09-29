/* Write a program that asks the user how far they ran (in miles)
 * and then how long it took them (in minutes), and print out
 * their speed in miles per hour. */
 var MINUTES_TO_HOURS = 60;
function start(){
	var distance = readInt('How many miles did you run?');
	var time = readInt('How many minutes did it take you?');
	println('Speed in mph: ' + MINUTES_TO_HOURS/time*distance)
}
