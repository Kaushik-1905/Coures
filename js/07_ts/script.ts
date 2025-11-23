let defultType = 234;
let isActive : boolean = true;
let decimal : number = 19;
let test : string ="kaushik";
let marks : number[] = [123 , 456 ,789];
let tuple : [number , string ] = [1 , "hello"]

type UserInfo = {
    name : string;
    age : number ;
    isAdmin? : boolean;
}

interface UserDetails{
    name : string;
    age : number;
    isAdmin? : boolean;
}

let obj1 : UserInfo = { name : "kaushik" , age : 20 };
let obj2 : UserDetails = {name : "john" , age : 30 };

function sum(a:number , b:number ):number {
    return a + b;
}

console.log(obj1,obj2);


