var score = score;
function lettergrade(score) {
    let grade;
    
    if(score <= 59) {
        grade = 'F';
    } else if(score >= 60 && score <= 69) {
        grade = 'D';
    } else if(score >= 70 && score <= 79) {
        grade = 'C';
    } else if(score >= 80 && score <= 89) {
        grade = 'B';
    } else if(score >= 90 && score <= 99) {
        grade = 'A';
    } else if(score >= 100) {
        grade = 'A+';
    }
    
    if (score % 10 >= 7) {
        grade = grade + "+";
    }
    
    return grade;
}
function start(){
    println(lettergrade(100));
}
