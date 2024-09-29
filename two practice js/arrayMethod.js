const arr = [12,34,56,76, 1,3,5,6]

const mainArr = arr.forEach((x) => console.log(x * 2)) 
// console.log(mainArr);
// map method

const mapMethod = arr.map(x => x * 2)
// console.log(mapMethod);

// find method in js

const findMethod = arr.find((x) => x > 20)
// console.log(findMethod);

// filter method in js

const filteredIn = arr.filter((x) => x > 32)
// console.log(filteredIn);

// array math 

const sumOfArr = arr.map((x) => x + 1)
console.log(sumOfArr);