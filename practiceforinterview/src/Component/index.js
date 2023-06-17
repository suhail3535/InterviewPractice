//Constructor function



function Persons (name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function () {
        console.log(`Name is ${this.name} and age is ${this.age}`)
    }
}

const john = new Persons("suhail", 26)
console.log(john)
john.sayHello()


//Classes

class Animal{
    constructor(name, age) {
        this.name = name;
        this.age=age
    }
    sayHello () {
        console.log(`my name is ${this.name} and ${this.age}`)
    }
}
const bruce = new Animal('suhail', 26)
bruce.sayHello();