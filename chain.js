const consumer = [{id : 1, name : 'Noman', address : 'Dhaka'}]
console.log(consumer[0].address);

// nested object : how to access the value of nested object and array

const products = {
    count : 50000,
    data : [
        { id : 1 , item : 'Samsung Galaxy A54 5G', price : 54000 },
        { id : 1 , item : 'Iphone 16 pro', price : 154000 }
    ]
}
console.log(products.data[1].price);

// advance value access

const userAddress = {
    id : 5001,
    name : 'Noman',
    address : {
        streets : {
            first : '17/2 kajipara',
            second : 'Mirpur10',
            third : 'Dhaka'
        },
        country : 'Bangladesh',
    }
}
console.log(userAddress.address.streets.second);

//  what is optional chain

const optionalChain = {
    id : 5002,
    name : 'Maisa',
    address : {
        city : 'Barisal',
        country : 'bangladesh',
    }
}
console.log(optionalChain.address.streets?.second); // hear streets is using (?) marks it's called be optional chain