let a = 2;
console.log(typeof a);

let b = "string";
console.log(typeof b);

let c = true;
console.log(typeof c);

let myobj = {
  name: "sattu",
  age: 23,
};

console.log(typeof myobj);

let arr = [1, 2, 3, 4, 5];

console.log(typeof(arr) + ' array')

// array in javascript is object

let checkForArray = Array.isArray(arr) //return boolean value
console.log(checkForArray)  //o/p-true
