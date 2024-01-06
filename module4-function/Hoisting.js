//hoisting- allow initilization value & calling function before defining and declaring.

//execution context:- 1. memory execution(variable environment), 2. code execution.

//memory execution phase.
//every variable and function are stored in key-value pair.
//a: undefined
//fn: greet(), whole body of the function are stored in fn key, no matter call before or after code execution phase.


// console.log(a)  //o/p- undefined
// greet() //o/p- hello from hoisting
add(2, 3) //o/p- add is not function, because add is undefined and undefined are not called(not to call function as expression before declaration).

var a = 'hi'

function greet(){
    console.log('hello from hoisting')
}

console.log(a) //o/p-hi
greet() //o/p-hello from hoisting


//function as expression
var add = function(a, b){
    console.log(a+b)
}

add(2, 3) //o/p-5