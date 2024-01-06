//to check number is even or not in given array

const numberArr = [1, 2, 34, 45, 56, 67, 78, 89]

let evenArr = []

// imperative way of writing code
for(let i=0; i<numberArr.length; i++){
    if(numberArr[i]%2==0){
    evenArr.push(numberArr[i])
    }
}

console.log(evenArr)

//filter method : return a new array, return all elements that matches the specific condition.
//if the condition is true it will return thr element for that condition else discard the element.

//declarative way of writitng code

let evenArr1 = numberArr.filter((element) => {
    return element%2==0
})

console.log(evenArr1)

const transactions = []

let moneyDeposited = transactions.filter(function(amount){
    return amount>0
})

console.log(moneyDeposited)