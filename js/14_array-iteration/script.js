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




// Array map
// this is make update and chnag array value

console.log(users);

let capitalize = (value) => {
    let capitalizeValue = value[0].toUpperCase() + value.slice(1).toLowerCase()

    return capitalizeValue
}

let newusers = users.map((user) =>{
    user.username = user.firstName + "_" + user.griad
    user.fullname = capitalize(user.firstName) + " " + capitalize(user.lastName)
    return users
})

console.log(newusers);


const numbers = [1,2,3,4,5]

console.log(numbers);

let result = numbers.reduce((prev,curr)=>{
    return curr + prev
},5
)

console.log(result);