const numbers = [2, 3, 5, 6, 7];
// using function declaration
function doubled(num) {
    return num * 2;
}
const result = numbers.map(doubled);
console.log(result);

const marks = [12, 3, 5, 7, 8];
// const arrow = (num) => num * 2;
const arrow = (num) => num * 2;
const arrowResult = marks.map(arrow);
console.log(arrowResult);


// on line of code

const students = [2, 4, 5, 6, 7, 8]
const studentResult = students.map(x => x*2)
console.log(studentResult);

const condition = students.map(x => x%2 === 0) // print only boolean value not the original value
console.log(condition);