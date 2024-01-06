//kind of template not exactly template, for creating multiple objects of same key.
//also create method for that objects.


//constructor function
function createCar(_name, _company, _color){
    this.name = _name,               //this keyword points to empty object & .name is a key for that empty object.
    this.company = _company,
    this.color = _color
    
    //method for that objects
    this.drive = function(){
        console.log(`driving ${this.name} of company ${this.company}` )
    }

}

let car = new createCar('X5', 'LOTUS', 'royal white')

let car1 = new createCar('v7', 'BENTLEY', 'royal-black')

let car2 = new createCar('veron', 'BUGATI_VERON', 'royal-red')

//console.log(car)
console.log(car2)

car2.drive()

//question, o/p:- TypeError
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// const member = new Person('Lydia', 'Hallie');
// Person.getFullName = function() {

//     return `${this.firstName} ${this.lastName}`;

//     };
// console.log(member.getFullName());

//question, o/p:-Person { firstName: 'Lydia', lastName: 'Hallie' }
//undefined
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    }
    const lydia = new Person('Lydia', 'Hallie');
    const sarah = Person('Sarah', 'Smith');
    console.log(lydia);
    console.log(sarah);
