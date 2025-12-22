// 01-find two number of sum

let firstnumber:number = Number( prompt("Enter first number: ")!);
let secondnumber:number = Number(prompt("Enter second number: ")!);
let c : number = firstnumber + secondnumber;

console.log("The sum of "+ firstnumber + " and " + secondnumber + " is: " + c);


// 02 - Arithmetic operations of two numbers
let a1: number = Number(prompt("Enter first number: ")!);
let b2: number = Number(prompt("Enter second number: ")!);

let sum1: number = a1 + b2;
let difference: number = a1 - b2;
let product: number = a1 * b2;
let quotient: number = a1 / b2;
let remainder: number = a1 % b2;

console.log("Sum: " + sum1);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Quotient: " + quotient);
console.log("Remainder: " + remainder); 

// 03 - Perimeter of rectangle
let length1: number = Number(prompt("Enter the length of the rectangle: ")!);
let breadth: number = Number(prompt("Enter the breadth of the rectangle: ")!);

let perimeter: number = 2 * (length1 + breadth);
console.log("The perimeter of the rectangle is: " + perimeter + "<br>");


// 04 - Area of rectangle
let length2: number = Number(prompt("Enter the length of the rectangle: ")!);
let breadth1: number = Number(prompt("Enter the breadth of the rectangle: ")!);

let area: number = length2 * breadth1;
console.log("The area of the rectangle is: " + area + "<br>");


// 05 - Circle: diameter, circumference, area
let radius: number = Number(prompt("Enter the radius of the circle: ")!);

let diameter: number = 2 * radius;
let circumference: number = 2 * 3.14 * radius;
let area1: number = 3.14 * radius * radius;

console.log("Diameter: " + diameter);
console.log("Circumference: " + circumference);
console.log("Area: " + area1 + "<br>");


// 06 - Centimeter to meter and kilometer
let centimeter: number = Number(prompt("Enter the value in centimeter: ")!);

let meter: number = centimeter / 100;
let kilometer: number = centimeter / 100000;

console.log(centimeter + " cm = " + meter + " m");
console.log(centimeter + " cm = " + kilometer + " km<br>");


// 07 - Celsius to Fahrenheit
let celsius: number = Number(prompt("Enter temperature in Celsius: ")!);
let fahrenheit: number = (celsius * 9 / 5) + 32;

console.log(celsius + "= " + fahrenheit + "<br>"); 


// 08 - Fahrenheit to Celsius
let fahrenheit1: number = Number(prompt("Enter temperature in Fahrenheit: ")!);
let celsius1: number = (fahrenheit1 - 32) * 5 / 9;

console.log(fahrenheit1 + "°F = " + celsius1 + "°C<br>");


// 09 - Convert days into years, weeks, days
let days: number = Number(prompt("Enter total number of days: ")!);

let years: number = days / 365;
years = years - (years % 1);

days = days % 365;

let weeks: number = days / 7;
weeks = weeks - (weeks % 1);

days = days % 7;

console.log("Years: " + years + ", Weeks: " + weeks + ", Days: " + days + "<br>");  

// 13 - Third angle of triangle
let angle1: number = Number(prompt("Enter first angle: ")!);
let angle2: number = Number(prompt("Enter second angle: ")!);

let angle3: number = 180 - (angle1 + angle2);
console.log("The third angle of the triangle is: " + angle3 + "<br>");


// 17 - Simple Interest
let principal: number = Number(prompt("Enter principal amount: ")!);
let rate: number = Number(prompt("Enter rate of interest: ")!);
let time: number = Number(prompt("Enter time in years: ")!);

let simpleInterest: number = (principal * rate * time) / 100;

console.log("The simple interest is: " + simpleInterest + "<br>");
