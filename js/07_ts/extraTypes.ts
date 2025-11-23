interface detailsType{
    info:string;
    username:string;
}

let details: string | detailsType = "this is exra types file.";

console.log(details);

details ={
    info:"User infromation",
    username:"user123"
};

console.log(details);

// details = 10;

// consol .log(details)

enum Gender {
    male,
    female,
    other,
}

let userGenader: Gender;

console.log(userGenader),
