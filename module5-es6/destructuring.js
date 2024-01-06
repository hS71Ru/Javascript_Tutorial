// the destructuring assisgment syntax is a javascript repression that make it posssible to unpack values from arrays, or proreties from objects, into distinct values.


//arrays
// let arr = ['hi', 'i',  , 'am', 'harsh']

// // let a= arr[0]
// // let b= arr[2]

// // console.log(a)
// // console.log(b)

// let [ a, b, c, d, e, f] = arr

// console.log(f)



//objects

let obj = {
    name : 'sattu',
    age : 22,
    gender : 'm',
    address : {
        country : 'india',
        state : 'up',
        city : 'vns'
    }
}

//can't assing different variable for destructuring object keys ,
//method for assign alternate name to keys.

let { name:n, age:a, gender:g, address:{country:cy, state:s, city:c}} = obj

console.log(n)
console.log(a)
console.log(g)
console.log(cy)
console.log(s)
console.log(c)
