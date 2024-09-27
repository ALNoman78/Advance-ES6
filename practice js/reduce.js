const numbers = [10, 30, 40, 20, 50, 69];
const reducer = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(reducer);


// if i need object value it can be access

const products = [
    { id: 1, product: "lenovo", price: 40000 },
    { id: 2, product: "samsung", price: 80000 },
    { id: 3, product: "mac", price: 140000 },
    { id: 4, product: "Dell", price: 50000 },
    { id: 5, product: "Hp", price: 46000 },
];

const objectReduce = products.reduce((accumulator , currentValue) => accumulator + currentValue.price, 0)
console.log(objectReduce);