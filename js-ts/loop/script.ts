// 01 - Find number of digits in a number
let num: number = Number(prompt("Enter a number: ")!);
let count:number = 0;  
while (num > 0) {
    let digit = num % 10;
    count++;
    num = (num-digit)/10;
}
console.log("Number of digits: " + count);


// 02 - First and last digit of a number
let number: number = Number(prompt("Enter a number: ")!);
let lastDigit: number = number % 10;
let firstDigit: number = number;

while (firstDigit >= 10) {
    firstDigit = (firstDigit - (firstDigit % 10)) / 10;
}
console.log("First digit: " + firstDigit);
console.log("Last digit: " + lastDigit);


// 03 - Sum of first and last digit
let number1: number = Number(prompt("Enter a number: ")!);
let lastDigit1: number = number1 % 10;
let firstDigit1: number = number1;

while (firstDigit1 >= 10) {
    firstDigit1 = (firstDigit1 - (firstDigit1 % 10)) / 10;
}
let sumDigits: number = firstDigit1 + lastDigit1;
console.log("Sum of first and last digit: " + sumDigits);


// 04 - Reverse of a number
let num2: number = Number(prompt("Enter a number: ")!);
let reverse: number = 0;
while (num2 > 0) {
    let digit: number = num2 % 10;
    reverse = reverse * 10 + digit;
    num2 = (num2 - digit) / 10;
}
console.log("Reverse of the number: " + reverse);


// 05 - Factorial of a number
let num3: number = Number(prompt("Enter a number: ")!);
let factorial: number = 1;
for (let i: number = 1; i <= num3; i++) {
    factorial = factorial * i;
}
console.log("Factorial of " + num3 + " is " + factorial);

// 06 - Fibonacci series
let n: number = Number(prompt("Enter the number: ")!);
let a: number = 0, b: number = 1;
for (let i: number = 1; i <= n; i++) {
    console.log(a + " ");
    let next: number = a + b;
    a = b;
    b = next;
}



// 07 - Prime number check
let num4: number = Number(prompt("Enter a number: ")!);
let flag: boolean = true;

if (num4 <= 1) {
    flag = false;
} else {
    for (let i: number = 2; i <= num4 / 2; i++) {
        if (num4 % i == 0) {
            flag = false;
            break;
        }
    }
}

if (flag) {
    console.log(num4 + " is a prime number<br>");
} else {
    console.log(num4 + " is not a prime number<br>");
}


// 08 - Prime factors
let num5 = Number(prompt("Enter a number: ")!);

for (let i = 2; i <= num5; i++) {
    while (num5 % i == 0) {
        console.log(i + " ");
        num5 = num5 / i;
    }
}


// 09 - Armstrong number


let num6: number = Number(prompt("Enter a number to chek arm: "));
let a1: number = num6;
let sum1: number = 0;

while(a1 != 0) {
    let digit: number = a1 % 10;
    sum1 = sum1 +  (digit * digit * digit);
    a1 = (a1 - digit) / 10;
}

if (sum1 == num6) {
    console.log(num6 + " is an Armstrong number");
}
else {
    console.log(num6 + " is not an Armstrong number");
}
