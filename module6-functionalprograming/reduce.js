//sum of every element in array

const numsArr = [1, 12, 34, 45, 56, 67, 78, 89, 90]

let sum = 0 //accumulato in reduce method

for(let i = 0; i<numsArr.length ; i++){
    
    sum = sum + numsArr[i];

}

console.log(sum)

//Reduce method: generally take four parammeter.

let resultSum = numsArr.reduce((acc, value) => {
        let updatedSum = acc+value;
        return updatedSum
}, 0 )

console.log(resultSum);

let resultProduct = numsArr.reduce((acc, value) => {
    let updatedProduct = acc*value;
    return updatedProduct
}, 1 )

console.log(resultProduct);
