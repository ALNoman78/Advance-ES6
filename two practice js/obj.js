const person = {
    name: "Alice",
    age: 30,
    address: {
        city: "New York",
        zip: "10001"
    },
    hobbies: ["Reading", "Cycling"]
};

// const{name:userName , age , address:{city:homeis}} = person;
// console.log(userName , age , homeis);

//another way

// const {address} = person
// const{city,zip} = address
// console.log(city,zip);

// dot notation / bracket notation

console.log(person['age']); // using bracket notation