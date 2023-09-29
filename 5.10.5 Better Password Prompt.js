//SECRET is the password (can be changed)
var SECRET = "abc123";
function start(){
	while(true){
	    var password = readLine('Enter password: ');
	    if(password == SECRET){
	        println('You got it!');
	        break;
	    }else{
	        println('Sorry, that did not match. Please try again.');
	    }
	}
}
