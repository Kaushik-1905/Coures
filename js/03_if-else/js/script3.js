let a = 8;
let b = 20;
let c = 9;


console.log("a > b && a > c :", a > b && a > c)
if (a > b && a > c) {
    console.log(`a: ${a} is greatest`);
}

console.log("(a > b || a > c)", (a > b || a > c))
console.log("!(a > b || a > c)", !(a > b || a > c))
if ((a > b || a > c)) {
    console.log(`a: ${a} is greater than either b: ${b} or c: ${c}`);
}

// let x = 0;
// let y = 1;

// if(++x || --y){
//     console.log("task 12");
// }
