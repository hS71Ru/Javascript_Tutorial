//we will have a number and have to check wheather square of that number is even or not

//imperative way of writing code

const a = 7;

const aSquare = a*a;

let isEven;

if(aSquare % 2 == 0){
    isEven = true;
}

else{
    isEven = false;
}

console.log(isEven);

//declarative way of writing code

const checkForSquare = (x) => (x*x%2===0 ? true : false);

console.log(checkForSquare(5));