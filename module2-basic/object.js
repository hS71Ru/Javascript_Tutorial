//in js object are in key value pair

var bagalWala = {
    firstName : 'hunk',
    lastName : 'ahir',
    age : 22,
    isBhadu : true
}

console.log(bagalWala)

//acess object value

//dot notation

console.log(bagalWala.isBhadu)

//bracket notation

console.log(bagalWala['isBhadu'])

var bagalWala2 = {
    firstName : 'satta',
    lastname : 'ahir',
    age : 21,

    isBhadu : true,

    friends : ['hunk ahir', 'chotu ahir', 'ambedkar meena', 'myself'],

    address : {
                state : 'utp',
                city : {
                    name : 'vns',
                    pincode : 221001
                }
    }

}
// also add function inside object.

console.log(bagalWala2.friends[2])

console.log(bagalWala2.address.city.pincode)

bagalWala2.isBhadu = false

console.log(bagalWala2)

bagalWala2.achieve = ['girlfriend', 'money', 'friends']

console.log(bagalWala2)

delete bagalWala2.age

console.log(bagalWala2)

//question 
// const bird = {
//     size: 'small',
// };

// const mouse = {
//     name: 'Mickey',
//     small: true,
// };

// console.log(bird)
// console.log(mouse)
// console.log(mouse.bird.size)
// console.log(mouse.[bird.size])
// console.log(mouse.[bird.["size"]])

//question, o/p:- 20 NaN
// const shape = {
//     radius: 10,
//     diameter() {
//     return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius,
//     };

// console.log(shape.diameter());
// console.log(shape.perimeter());