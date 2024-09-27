const arr = [1, 3, 5, 7, 9];
const evenNumber = arr.map((arr) => arr + 1);
console.log(evenNumber);

const devisable = [33, 50, 79, 78, 90, 101, 30];
const filterUsing = devisable.filter(x => x % 10 === 0)
console.log(filterUsing);

const findarray = devisable.find(x => x % 10 === 0)
console.log(findarray);

// filter  array + object 

const instructor = [
    { name : ' noman ' , age : 22 , position : 'senior'},
    { name : 'dino' , age : 23 , position : 'junior'},
    { name : 'm3' , age : 21 , position : 'senior'},
]

const filterJunior = instructor.filter(x => x.position === 'senior')
console.log(filterJunior);

//  total sum 
const sum = [
    {name : 'mena', age : 20},
    {name : 'mena', age : 15},
    {name : 'mena', age : 22},
]

const reducre = sum.reduce((accumulator, currentValue) => accumulator + currentValue.age,0)
console.log(reducre);