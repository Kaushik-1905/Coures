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


console.log("================");


let output4 = ""


for (let row = 1; row <= 5; row++) {


    for (let col = 1; col <= row; col++) {
        output4 = output4 + ` ${col} `
    }
    output4 = output4 + "\n"

}

console.log(output4);



console.log("================");


let pyramid = "";
let row = 5;



for (let i = 1; i <= row; i++) {

    //spaces print mate
    for (let s = 0; s < row - i; s++) {
        pyramid += " ";
    }


    //stars print mate
    for (let j = 0; j < i; j++) {
        pyramid += "*"
    }


    pyramid += "\n";
}

console.log(pyramid);



console.log("================");

let n = 5;
let triangle = "";

for (let i = 1; i <= n; i++) {


    for (let s = 0; s < n - i; s++) {
        triangle += " ";
    }


    for (let j = 0; j < i; j++) {
        triangle += `${i}`;
    }

    triangle += "\n";
}

console.log(triangle);


console.log("================");


let pyramid1 = "";
let m = 5;



for (let i = 1; i <= m; i++) {

    //spaces print mate
    for (let s = 0; s < m - i; s++) {
        pyramid1 += " ";
    }


    //stars print mate
    for (let j = 0; j < i; j++) {
        pyramid1 += " * "
    }


    pyramid1 += "\n";
}

console.log(pyramid1);


console.log("================");


