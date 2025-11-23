// console .log = "kaushik"

// let a = 15;

// let b = 10;

//Membership 


const myArary = [1,2,3,4,5,6,7,8,9]

console.log("exist or not:", '4' in myArary);
console.log("exist or not :",myArary.includes(4));

// Identiry

let obj1 = {name:"john"}
let obj2 = {name:"john"}
let obj3 = {...obj1}

console.log(obj1);
console.log(obj3);

console.log("compere bject : ",obj1 === obj3)

obj3["name"]="kaushik"
console.log(obj1);
console.log(obj3);