// sum
let sum = 0

for (let a = 1; a <= 10; a++) {
    sum = sum + a;
}
console.log(`1 to 10 sum : ${sum}`);



// multipication
let mul = 1

for (let b = 1; b <= 5; b++) {
    mul = mul * b;
}
console.log(`1 to 5 multipication : ${mul}`);


// 


//print number linewise 

for (let i = 1; i <= 10; i++) {
    let num = '';
    for (let j = 1; j <= i; j++) {
        num = num + ++j;
    }
    console.log(num);
}



for (let i = 1; i <= 5; i++) {
    let j = 2 * i - 1;
    console.log(j);
}




// Loop through numbers from 1 to 10


for (let i = 0; i <= 10; i++) {
    if (i % 2) {
        console.log(i);
    }
}


for (let i = 0; i <= 10; i++) {
    if (!(i % 2)) {
        console.log(i);
    }
}




// print star


// for(let i = 5; i < 6; i++){
//     let b = "*";
//     for(let a =  )
// }




let result = ""

for (let row = 1; row <= 5; row++) {
    for (let col = 1; col <= 5; col++) {
        result = result + " * "
    }
    result = result + "\n"
}

console.log(result);



console.log("================");


let result2 = ""

for (let row = 1; row <= 5; row++) {

    for (let col = 1; col <= row; col++) {
        result2 = result2 + " * "
    }
    result2 = result2 + "\n"

}

console.log(result2);




console.log("================");


let output = ""


for (let row = 1; row <= 5; row++) {


    for (let col = 1; col <= 5; col++) {
        output = output + ` ${row} `
    }
    output = output + "\n"

}

console.log(output);


console.log("================");


let output3 = ""


for (let row = 1; row <= 5; row++) {


    for (let col = 1; col <= 5; col++) {
        output3 = output3 + ` ${col} `
    }
    output3 = output3 + "\n"

}

console.log(output3);



console.log("================");


let output1 = ""


for (let row = 1; row <= 5; row++) {


    for (let col = 1; col <= row; col++) {
        output1 = output1 + ` ${row} `
    }
    output1 = output1 + "\n"

}

console.log(output1);

