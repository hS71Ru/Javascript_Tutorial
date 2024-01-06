let myObj0 = {
    firstname: 'sattu',
    lastname: 'biede',
    age: 23,

    // printDetails: function(){
    //     console.log(`myself ${this.firstname} ${this.lastname}, ${this.age} years old.`)
    // }
}

let printDetails = function(city, power){
    console.log(`myself ${this.firstname} ${this.lastname}, ${this.age} years old from ${city} having ${power}.`)
}

let myObj1 = {
    firstname: 'sakuni',
    lastname: 'mama',
    age: 25,

    // printDetails: function(){
    //     console.log(`myself ${this.firstname} ${this.lastname}, ${this.age} years old.`)
    // }
}

// myObj0.printDetails()
// myObj1.printDetails()

//call method
//borrow function for object from another obhect & if function is global , no need to borrow
// myObj0.printDetails.call(myObj1) 
printDetails.call(myObj1, 'varanasi', 'kutil buddhi' ) 

//apply method
//same as call method , major diff:- argumnets are passed inside array
printDetails.apply(myObj0, ['varanasi', 'model body'] )

//bind method 
// same as call method , and used a specific variable to store function and it invoked on requirement
let myFnc= printDetails.bind(myObj1, 'varanasi', 'kutil buddhi' ) 
console.log(myFnc)

myFnc()