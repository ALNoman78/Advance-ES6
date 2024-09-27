class person {
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
    speak(){
        console.log(`My Name is ${this.name} . and I'm ${this.age}`);
    }
}
const moule = new person ('Maisa' ,  22)
// moule.speak()
// console.log(moule);

const noman = moule.speak();
console.log(noman);;