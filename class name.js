const students = [
    {id : 1, productName : 'lenevo', price : 12000},
    {id : 2, productName : 'oppo', price : 6000},
    {id : 3, productName : 'apple', price : 9888}
]
class Teacher{
    constructor(name , subject , previousSchool){
        this.name = name;
        this.subject = subject;
        this.previousSchool = previousSchool;
    }
    teach(){
        console.log('This is teacher ');
    }
}

const obj = new Teacher('Jankar', 'Web Developer', 'Programming Hero')
console.log(obj);


class x {
    constructor (id, productName , price , features){
        this.id = id;
        this.productName = productName;
        this.price = price;
        this.features = features
    }
}
const e = [];
const addItems = new x('01' , 'lenovo', 54000, 'Thats using ES6');
console.log(addItems);


class features {
    constructor (name, id, batch, cgpa){
        this.name = name;
        this.Profession = id;
        this.Batch = batch;
        this.cgpa = cgpa;
    }
}
const itemsFeatures = new features('Abdulla Al Noman', 'Web Devloper', 'Web dev - 10 with m', '3.83' )
console.log(itemsFeatures);