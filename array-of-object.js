const products = [
    { id: 1, product: "lenevo", price: 40000 },
    { id: 2, product: "samsung", price: 80000 },
    { id: 3, product: "mac", price: 140000 },
    { id: 4, product: "Dell", price: 50000 },
    { id: 5, product: "Hp", price: 46000 },
];

// map method

const productName = products.map((p) => p.product);
console.log(productName);

const priceTag = products.map((items) => items.price);
console.log(priceTag);

// for each

const each = products.forEach((p) => console.log(p.id));
console.log(each); // for each not return the value (always print undefined)

// filter

const userInterFactch = products.filter((p) => p.price);
// console.log(userInterFactch);

const upto6 = products.filter((p) => p.price > 60000);
console.log(upto6);

// find

const selectItems = products.find((p) => p.price > 50000);
console.log('find items ', selectItems);

const selectUnder = products.find(p => p.price < 59999)
console.log(selectUnder);

// reduce method

const reduceItems = products.reduce((para1 , para2) => para1 + para2.price, 0)
console.log(reduceItems);