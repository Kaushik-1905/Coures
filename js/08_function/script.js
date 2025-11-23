// faactorial number

function logFaactorial(num) {
    let a = 1;
    for (let i = 1; i <= num; i++) {
        a *= i;
    }
    return a;
}


console.log(logFaactorial(5));
console.log("=====");



// fibonacci series


function fibonacciSeries(num) {
    let a = 0;
    let b = 1;

    console.log(a);
    console.log(b);

    for (let i = 2; i < num; i++) {
        let x = a + b;
        console.log(x);
        a = b;
        b = x;
    }
}


fibonacciSeries(5);


// 

function fibonacci(num) {
  let a = 0, b = 1;
  let result = [];

  for (let i = 0; i < num; i++) {
    result.push(a);
    let next = a + b;
    a = b;
    b = next;
  }

  return result;
}
console.log(fibonacci(10));



