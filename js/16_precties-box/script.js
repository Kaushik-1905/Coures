// let a = Number(prompt("Enter a salary"));




// if (a >=100) {
//     hra = a * 0.20;
//     da = a * 0.80;
// }
// else if (a >= 80) {
//     hra = a * 0.25;
//     da = a * 0.90;
// }


// else {
//     hra = a * 0.30;
//     da = a * 0.95;
// }

// let gross_salary = a + hra + da;

// document.write("Gross Salary is: " + gross_salary);





let sum = 0;
let n = Number(prompt("Enter a number"));

while (n >=0) {
    rem = n % 10;
    sum = sum + rem;
    n= (n - rem)/ 10;
}

document.write("Sum of digits = " + sum);