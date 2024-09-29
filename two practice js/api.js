const people = [
    {
        id: 1,
        name: "John Doe",
        age: 30,
        occupation: "Software Engineer",
        contact: {
            email: "john.doe@example.com"
        },
        address: {
            street: "123 Main St",
            city: "San Francisco",
            state: "CA",
            zip: "94105"
        },
        social: {
            twitter: "@johndoe"
        },
        hobbies: ["Coding", "Hiking", "Photography"]
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 25,
        occupation: "Graphic Designer",
        contact: {
            email: "jane.smith@example.com",
            phone: "987-654-3210"
        },
        hobbies: ["Drawing", "Traveling"]
    },
    {
        id: 3,
        name: "Mark Johnson",
        age: 40,
        occupation: "Marketing Manager",
        contact: {
            email: "mark.johnson@example.com",
            phone: "123-456-7890"
        },
        address: {
            street: "789 Oak St",
            city: "Chicago",
            state: "IL",
            zip: "60607"
        },
        hobbies: ["Running", "Golf"]
    }
];

// const personPeople = people.filter(x => x.age > 39)
// console.log(personPeople);


// problem 02

const polapain = [
    { Name: "Abul", job: "sorkari", salary: 17000 },
    { Name: "Babul", job: "besorkari", salary: 25000 },
    { Name: "Kabul", job: "sorkari", salary: 21000 },
    { Name: "Habul", job: "besorkari", salary: 47000 },
    { Name: "Jabul", job: "sorkari", salary: 23000 },
    { Name: "Mabul", job: "besorkari", salary: 55000 },
];

const searchMan = polapain.filter ((x) => {
    const main = (x.job === 'sorkari' && x.salary >= 21000) || (x.job === 'besorkari' && x.salary >= 41000)
    return main;
}) 

console.log(searchMan.length);

// const randomNumber = Math.floor(Math.random()*searchMan.length)
// console.log(randomNumber);