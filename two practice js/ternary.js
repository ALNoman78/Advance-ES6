// ternary operator

// const name = "Abdullah";

// console.log(name === 'Abdullah' ? 'That is right' : 'That is false');

// logical operator

const userId = "Bus is available for your varsity";
const mainId = "Uber is available for your university";

// console.log(userId && 'user uid code is right'); // and operator

// or logical operator

// console.log(userId || mainId);

// object

const person = {
    name: "Alice",
    age: 30,
    address: {
        city: "New York",
        zip: "10001",
    },
    hobbies: ["Reading", "Cycling"],
};

// const x = {...person};
// console.log(x);

// const {name, age:myAge } = person // ":" diya object property er name change kra jay
// console.log(myAge);

const {address} = person
const {city:home} = address
console.log(home);