//concept of closure - nested function wheather is is returned or not, will always have access to outer scope values.

// function ts(){
//     let a = 10;

//     function ts1(){
//         console.log(a)
//     }

//     return ts1
// }

// let fn = ts()
// console.log(fn)
// fn()

//closures in nested function

// function greet(){
//     let name = 'sattu'

//     function displayName(){
//         console.log('hi '+ name)

//         let age = 23

//         function displayAge(){
//             console.log('my age : '+age + ","+ 'sakuni')
//         }

//         return displayAge
//     }

//     return displayName
// }

// let g = greet()
// // console.log(g)
// // g()

// let g1 = g()
// // console.log(g1)
// g1()


////function currying - application of closure//

let sum = function(x, y){
        console.log(x+y)
}

sum(2, 4)


//using function currying - transform function that take multiple arguments into single function that take single argument.

let sumCurried = function(x){
    return function(y){
        console.log(x+y)
    }
}

let sumOfTwo = sumCurried(2)

//console.log(sumOfTwo)

sumOfTwo(8)