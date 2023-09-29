var MAX = 1000;

function start(){
var firstNum = 0;
var secondNum = 1;
var thirdNum = firstNum + secondNum;
    while(thirdNum<MAX){
        thirdNum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = thirdNum;
        println(firstNum);
    }
}
