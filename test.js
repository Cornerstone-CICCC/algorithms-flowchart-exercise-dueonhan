'exercise 3'
var num1 = 9
var num2 =14
var num3 = 11

var max ;

if(num1 > num2){
    max = num1;
    if(num3 > num1){
        max = num3;
    }
}else{
    max = num2;
    if(num3 > num2){
        max = num3;
    }
}

console.log("max:"+max);

'exercise4'

var num1 =3;
var num2 =4;
var num3 =5;
var result = true;

if (num1 + num2 > num3 && num1 + num3 > num2 && num2 + num3 > num1) {
    result = true;
} else {
    result = false;
}
console.log('result:'+result)

'exercise5'

var score = 59;
var grade;

if(score >= 80){
    grade = "A";
} else if(score >= 60){
    grade = "B";
} else if(score >= 40){
    grade = "C";
} else {
    grade = "No Grade";
}

console.log("grade: " + grade);