//same works as constructor function 

class Person{
    constructor(_name, _age){
        this.name = _name,
        this.age = _age
    }

    welcome(){
        console.log(`Homecoming, ${this.name} of ${this.age} year old.`)
    }
    //no need to use this & function keyword for creating  method.
}

let friend1= new Person('sattu biede', 22)

friend1.welcome()

console.log(friend1)

