// map method

const numbers = [12, 32, 45, 65, 76];
const doubled = numbers.map(x => x * 2)
console.log(doubled);

// for each

const forEach = numbers.forEach(x => x + 2)
console.log(forEach); // no return , print only undefined

// filter

const studentResult = [23,45,65,78,8,45,34,99]
const conditionResults = studentResult.filter(x => x > 40)
console.log(conditionResults);

const evenNumber = studentResult.filter(x => x % 2 === 0)
console.log(evenNumber);

// find 

const findNumber = [12,34,56,78,89,34]
const findMethod = findNumber.find(x => x > 10) //  if condition is true then it will show the first value of array
console.log(findMethod);