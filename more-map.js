const number = [12, 23, 45, 567, 8];
const result = number.map (x => x*2) // map  ( we will direct pass the function here / function name pass here)
// if i want sum the array 

const sum = number.map( y => y + 5)
console.log(sum);

// if i want to print half of the value

const haftOfNumber = number.map(x => x /2)
console.log(haftOfNumber);

// square value in map

const sql = number.map(x => x * x )
console.log(sql)

// also use for string to find string length

const friends = ['Maisa', 'Monoara', 'Moule', 'Noman' , 'Abdulla' , 'Al']
const lengths = friends.map(x => x.length)
console.log(lengths);

// if i need first letter

const firstletter = friends.map(x => x[0]); // sob gula string er 0 index a target kore print korbe
console.log(firstletter);