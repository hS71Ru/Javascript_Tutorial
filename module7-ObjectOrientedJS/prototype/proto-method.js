function myObj(_name, _age){
    this.name  = _name
    this.age = _age

    // this.getNameAndAge = function(){
    //     console.log.log(`myself ${this.name} , ${this.age} years old`)
    // }
    //this voilet the dry rule i.e repetation of same code.
    myObj.prototype.getNameAndAge = function(){
        console.log(`myself ${this.name} , ${this.age} years old`)
    }


}

myObj.prototype.getNameAndAge = function(){
    console.log(`myself ${this.name} , ${this.age} years old`)
}

//write a method for object inside and outside constructor function using prototype , both works .

let person = new myObj('sattu', 23)
let person1 = new myObj('sakuni', 25)

console.log(person.getNameAndAge())
console.log(person1)



