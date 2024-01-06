//primitive datatype - values are stored in stack . 

let person = 'sattu'

let person1 = person  //value are assigned,  values are immutable

person = 'sakuni'

console.log(person)
console.log(person1) //sattu


//reference datatype - vlaues are stored in heap and a pointer in stack point at that location.

let person2 = {
    name: 'sattu',
    age: 23
}

let person3 = person2 //memory location of heap is assinged, values are mutable 

person3.name= 'sakuni'

console.log(person2) 
console.log(person3) //sakuni