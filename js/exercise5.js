'exercise5'

let score = Math.floor(Math.random() * 100)+1; ;
let grade;

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