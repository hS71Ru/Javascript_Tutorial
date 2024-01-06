//higher order function
//functions that operate on other functions, either by taking them  as arguments or by returning them.
//function that receives a function as an argument or return the function as output.

//imperative way of writing code ,i.e manage control flow of program
// const arr = [1, 2, 3, 4, 5]

// let squaredArray = []

// for(let i=0; i<arr.length; i++){
//     squaredArray.push(arr[i]*arr[i]);
// }

// console.log(squaredArray)


//declarative way of writing code using map(higher order function)

//map will loop through every element of array and perform specific operation that are provided.

//map method will alaways return a new array with results.

// const num = [1, 2, 3, 4, 5]

// let squaredNum = num.map(function(n){
//     return n*n
// })

// console.log(squaredNum)



//arrow function in HOF
// const transactions = [1000, 3000, 4800, 2000, -898, 3800, -4500]

// const inrToDollar = 81.46

// const transactionToDollar = transactions.map((amount) =>{
//     return (amount/inrToDollar).toFixed(0);
// })

// console.log(transactionToDollar)

// //forEach
// //forEach works same as map function but it does not return anything as map return a new array.

// const transactionToDollar1 = transactions.forEach((amount) =>{
//     console.log((amount/inrToDollar).toFixed(0));
// })

let sum = 0;
let arr = [10,15,20,30];  
arr.forEach(function myFunction(element) {  
    sum = sum + element;  
});  
console.log(sum);

//find 
//return the first element of an array that satisfy the condition

// const transactions = [1000, 3000, 4800, 2000, -898, 3800, -4500]

// let firstWithdrawal = transactions.find((amount) => {
//     return amount<0
// })

// console.log('First Withdrawal -> ' + firstWithdrawal)

// //findIndex
// //find the index and also can manipulate the particular value at that index.


// let firstWithdrawalIndex = transactions.findIndex(function(amount){
//     return amount<0
// })

// console.log('First Withdrawal index -> ' + firstWithdrawalIndex)


//some method : condition check : to get true or false based on condition
//it will return true if even 1 element satisfy the condition



// const transactions = [1000, 3000, 4800, 2000, -898, 3800, -4500]


// let resultSome = transactions.some((amount) => {
//     return amount<0
// })

// console.log(resultSome)

// //every method
// //return true or false if every element satisfy the condition 

// let resultEvery = transactions.every(function(amount) {
//     return amount<0
// })

// console.log(resultEvery)