// FILET USES FOR CONDITION ONLY with using loop and print

const numbers = [12, 32, 54, 65, 76];
const filters = numbers.filter((x) => x >= 54);
console.log(filters);

const ages = [21, 22, 22, 24, 31];
const filterAge = ages.filter(x => x % 2 === 0)
console.log('Eligible for vote ', filterAge);

// odd number

const oddNumber = ages.filter(x => x % 2 !== 0)
console.log(oddNumber , 'This array given only odd number');

// string char print only even number

const friends = ['Maisa', 'Monoara', 'Moule ', 'Abdulla', 'Al', 'Noman']
const evenChar = friends.filter(x => x.length % 2 === 0)
console.log('Even Char of name is = ', evenChar);

// odd char is 

const oddChar = friends.filter(x => x.length % 2 !== 0)
console.log('This char of odd number = ', oddChar)

// string
const big = ['BIG', "Noman", 'MAISA']
const x = big.filter(p => p === 'MAISA')
console.log(x);

//  give me under 10 value of my array

const array = [23,5,67,34,2,45,6,34]
const underTen = array.filter(p => p > 10)
console.log(underTen);