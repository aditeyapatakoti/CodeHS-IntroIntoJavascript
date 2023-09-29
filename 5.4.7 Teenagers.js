function start(){
    var age = readInt('What is your age? ');
    var teenager = (age >= 13) && (age <= 19);
    if (teenager == true){
        println('Yes, you are a teenager. ');
    } else {
        println('No, you are not a teenager ');
    }
}
