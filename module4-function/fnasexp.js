//an expression

var a = 2+3
console.log(a)

//function as expression,
//function with no name is know as anonymous function

// var sum = function(a, b){
//     console.log(a+b)
// }
// sum(2, 3)

// var sum = function(a, b){
//     return a+b
// }
// var v = sum(2, 3)
// console.log(v)

var sum = function(a, b){
    return a+b
}
var w = sum
var v = w(2, 3)
console.log(v)