let users = [
    {
        griad : "11048" ,
        firstName : "kaushik",
        lastName : "dagaya",
    },

    {
        griad : "11049" ,
        firstName : "kevin",
        lastName : "soni",
    },

    {
        griad : "11050" ,
        firstName : "punit",
        lastName : "rawal",
    },

    {
        griad : "11051" ,
        firstName : "sumit",
        lastName : "rawal",
    },

    {
        griad : "11052" ,
        firstName : "abhay",
        lastName : "dave",
    },

    {
        griad : "11053" ,
        firstName : "raj",
        lastName : "damor",
    }

]

for(let index = 0; index< users.length; index++){
    console.log(users[index]);
}


// for in : array:- index, object: key

// for(let index in users){
//     console.log(users[index]);
// }



// for of : array:- value, object: Does'n work with objects
for(let user of users){
    console.log(user);
}