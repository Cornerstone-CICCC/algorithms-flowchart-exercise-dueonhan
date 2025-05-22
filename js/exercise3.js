'exercise 3'
let num1 = Math.floor(Math.random() * 15)+1; 
let num2 = Math.floor(Math.random() * 15)+1; 
let num3 = Math.floor(Math.random() * 15)+1; 

let max ;
console.log("num1:"+num1);
console.log("num2:"+num2);
console.log("num3:"+num3);

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