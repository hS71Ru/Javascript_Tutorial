let arr = [
    {name: "A", age: 67 , gender : "M"},
    {name: "B", age: 45 , gender : "F"},
    {name: "C", age: 36 , gender : "F"},
    {name: "D", age: 12 , gender : "M"},
    {name: "E", age: 89 , gender : "M"},
    {name: "F", age: 108 , gender : "F"},
    {name: "G", age: 18 , gender : "M"},
    {name: "H", age: 22 , gender : "F"},

]

//without chaining
// let genderOfMales = arr.filter(function(g){
//     return g.gender == 'M'
// })

// let ageOfMales = genderOfMales.map((n) => {
//         return n.age;
// })

// console.log(genderOfMales)
// console.log(ageOfMales)

//chaining HOF
// let ageOfMales = arr.filter(function(g){
//         return g.gender == 'M'
//     }).map(function(a){
//         return a.age
//     })

//     console.log(ageOfMales)

const transactions = [1000, 3000, 4800, 2000, -898, 3800, -4500]

let amountDeposited = transactions.filter(function(n){
    return n>0
})

let sumOfAmountDeposited = transactions.reduce(function(acc, v, amountDeposited){
        let updatedDepositAmount = acc+v
        return updatedDepositAmount
}, 0)

console.log(amountDeposited)
console.log(sumOfAmountDeposited)

// let sumOfAmountDeposited = transactions.filter(function(n){
//         return n>0
//     }).reduce((acc,v) => {
//         let updatedDepositAmount = acc+v
//         return updatedDepositAmount

//     }, 0)

//     console.log(sumOfAmountDeposited)