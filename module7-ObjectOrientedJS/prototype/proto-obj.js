let myObj = {}

console.log(myObj)

let myObj1 = {
    name: 'sattu',
    age: 23
}

console.log(myObj1)
console.log(myObj1.hasOwnProperty('age'))

// objects of constructor function
function myObj2(_name, _age){
    this.name = _name
    this.age = _age
}

let person = new myObj2('sattu', 23)
let person1 = new myObj2('sakuni', 25)

console.log(person)
console.log(person1)