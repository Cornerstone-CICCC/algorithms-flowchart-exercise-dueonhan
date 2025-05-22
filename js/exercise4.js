'exercise4'

let num1 =3;
let num2 =4;
let num3 =5;
let result = true;

if (num1 + num2 > num3 && num1 + num3 > num2 && num2 + num3 > num1) {
    result = true;
} else {
    result = false;
}
console.log('result:'+result)