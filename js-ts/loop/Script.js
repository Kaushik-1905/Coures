//01-find  number of digit a number
// 


let num = Number(prompt("Enter a number: "));
let count = 0;  
while (num > 0) {
    let digit = num % 10;
    count++;
    num = (num-digit)/10;
}

document.write("Number of digits: " + count + "<br>");


//02-fisrt and last digit of a number 
// 


let number = Number(prompt("Enter a number: "));

let lastDigit = number % 10;

while (number >= 10) {
    let digit = number % 10;
    number = (number - digit) / 10;
}

document.write("fisrt digit  " + number + "<br>");
document.write("last digit  " + lastDigit + "<br>");





//03-find sum of first and last digit of a number
// 


let number1 = Number(prompt("Enter a number: "));

let lastDigit1 = number1 % 10;

while (number1 >= 10) {
    let digit = number1 % 10;
    number1 = (number1 - digit) / 10;
}

sum = lastDigit1 + number1;

document.write("Sum of first and last digit: " + sum);



//04-find a reverse of a number
// 

let num2 = Number(prompt("Enter a number: "));
let reverse = 0;
while (num2 > 0) {
    let digit = num2 % 10;
    reverse = reverse * 10 + digit;
    num2 = (num2 - digit) / 10;
}       
document.write("Reverse of the number: " + reverse);


//05-factorial of a number
// 

let num3 = Number(prompt("Enter a number: "));
let factorial = 1;
for (let i = 1; i <= num3; i++) {
    factorial = factorial * i;
}
document.write("Factorial of the number: " + factorial);



//06-fibonacci series
// 

let n = Number(prompt("Enter the number of terms: "));
let a = 0, b = 1;
for (let i = 1; i <= n; i++) {
    document.write(a + "<br>");
    let nextTerm = a + b;
    a = b;
    b = nextTerm;
}


// 07-prime number
// 

let num4 = Number(prompt("Enter a number: "));
flag = true;
if (num4 == 0 || num4 == 1){
    document.write(num4 + " is not a prime number");
}
for (let i = 2; i <= num4 / 2; i++) {
    while(num4 % i == 0){
        flag = false;
        break;
    }
}
    if (flag == true) {
        document.write(num4 + " is a prime number");
    } else {
        document.write(num4 + " is not a prime number");
    }


// 08-prime-fact
//


let num5 = Number(prompt("Enter a number: "));

for (let i = 2; i <= num5; i++) {
    while (num5 % i == 0) {
        document.write(i + "<br>");
        num5 = num5 / i;
    }
}


// 09-armstrong number
//  

let num6 = Number(prompt("Enter a number to chek arm: "));
let a1 = num6;
let sum1 = 0;

while(a1 != 0) {
    let digit = a1 % 10;
    sum1 = sum1 +  (digit * digit * digit);
    a1 = (a1 - digit) / 10;
}

if (sum1 == num6) {
    document.write(num6 + " is an Armstrong number");
}
else {
    document.write(num6 + " is not an Armstrong number");
}
