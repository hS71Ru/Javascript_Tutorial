//undefined - explicitly not giving value to variable, js assigned undefined to it by default.

let a
console.log(a) //o/p= undefined

let arr = [1, 2, , 4]
console.log(arr[2])  //o/p= undefined

function add(a, b){
    c=a+b
    //return c
}
//console.log(c)  //o/p= not defined

let sum = add(2, 4)
console.log(sum)  //o/p= undefined, if value is not return by function
//console.log(c)  //o/p= 6


//null - explicitly giving null value to variable, variable are not used in any operation

let b = null
console.log(b)  //o/p=null

//not defined  - accessing variable without dehining

console.log(c)  //o/p= not defined