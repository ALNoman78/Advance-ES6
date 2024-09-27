class Vehicle{
    constructor(name , price){
        this.name = name;
        this.price = price;
    }
}
class bus extends Vehicle{
    constructor(name ,price, seat , ticketPrice){
        super(name,price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}
class track extends Vehicle {
    constructor(name , price , load ) {
        super(name, price)
        this.load = load;
    }
}
const x = new track('Maisa monoara', '5500' , '45 TON')
console.log(x);