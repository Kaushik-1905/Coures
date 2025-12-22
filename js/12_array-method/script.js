// Array length
// to print a length a array    

let fruits = ["Banana", "Orange", "Apple", "Mango","kivi"];

let size = fruits.length;

console.log(fruits.length);


// Array toString
// make this to array to string 

let Users = ["sumit", "punit", "krish", "raj" , "kaushik"];

let myList = Users.toString();

console.log(myList);


//Array at
// give a value
// by defult gives first value
// start with 0 (like 0,1,2,3,4...)



let User = ["sumit", "punit", "krish", "raj" , "kaushik"];

let userData = User.at(3);

console.log(userData)



// Array join
// use for array join to like what i expect mens a join to - also reaples with other
// by defult join a non spece like "sumitpunitkarish..." like this


let  employee = ["sumit", "punit", "krish", "raj" , "kaushik"];

let employeeData = employee.join("*");

console.log(employeeData);




// pop
// tby defult remove last value of aaray

let employees = ["sumit", "punit", "krish", "raj" , "kaushik","kevin"];

employees.pop();

console.log(employees);




// Array push
// add a new array in exixting array

let shope = ["car-shop","bike-shop","auto-shop","truck-shop"];

shope.push("scooter-shop");

console.log(shope);


// Array shift
// removes the first element of an array

let car = ["bmw", "audi", "rangrover", "toyota","tata"];

car.shift();

console.log(car);



// Array unshift
// adds a new element to an array

let cars = ["bmw", "audi", "rangrover", "toyota","tata"];

cars.unshift("suzuki");

console.log(cars);


// array isarray
// defind a array is a array gives output in true or false 


let boy = ["karan", "kevin", "abhay", "sumit", "punit", "kaushik", "raj"]

array.isarray(boy);


// delete
// Use pop() or shift() instead.

let boys = ["karan", "kevin", "abhay", "sumit", "punit", "kaushik", "raj"];

boys.delet()

console.log(boys);


//  concat is use for merga a array 

let myGirls = ["Cecilie", "Lone"];
let myBoys = ["Emil", "Tobias", "Linus"];

let myChildren = myGirls.concat(myBoys);


console.log(myChildren)


// copyWithin
// copies array elements to another position in an array


// flat
// flat is use for marge a all array in one line 

// slice
// use for a cut a first value of array

let girl = ["nisha","tisha",,"hina","mina"];

let girls = girl.splice(2);

console.log(girls);