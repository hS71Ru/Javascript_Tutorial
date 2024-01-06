//var keyword
// redeclaration & reassining in var keword
var a = 2
var a = 3
a=9

console.log(a)


//let keyword
// reassining in let keyword
let b= 2
b = 8

console.log(b)

//var is function scoped while let is block scoped
if(true){
    let c= 10
    console.log(c)
}

//const keyword
//as a let ketword bt reassinging is not acceptable

const d = 'lihit'

console.log(d)

const speed = 'quick'
console.log(`The ${speed} brown fox jumps over the lazy dog`)

const obj = { foo : 1}
obj.bar = 2

console.log(obj)

console.log(typeof (new (class { class () {} })))


