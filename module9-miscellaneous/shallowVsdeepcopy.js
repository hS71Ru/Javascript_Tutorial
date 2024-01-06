//shallow copy- one level of mutability, 
let person = {
    name: 'sattu',
    age: 23,

    address: {
        city:'vns',
        pincode: 222314
    }
}

let person1 = {...person} //shallow copy using spread operator

person1.name= 'sakuni'
person.address.pincode = 221001

console.log(person) 
console.log(person1)


//deep copy  - object have totally seprate reference, muti-level mutability
let person2 = {
    name: 'sattu',
    age: 23,

    address: {
        city:'vns',
        pincode: 222314
    }
}

let person3 = JSON.parse(JSON.stringify(person2))    //deep copy using

person2.name= 'sakuni'
person2.address.pincode = 221001

console.log(person2) 
console.log(person3)