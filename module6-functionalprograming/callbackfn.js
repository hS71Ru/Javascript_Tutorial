//in js, a callback function is a function that is passed into another function as an argument. 
//This function can be invoked a later stage of time.
//in js, function are objects, functions can be passed as arguments.

// function printFirstName(firstname){
//     console.log(firstname);
// }

// printFirstName("harsh");

// function printLastName(lastname){
//     console.log(lastname);
// }

// printLastName("singh");

//use of callback function

// function printFirstName1(firstname, callback){
//     console.log(firstname);
//     callback("singh");
// }

// function printLastName1(lastname){
//     console.log(lastname);
// }

// printFirstName1('Harsh' , printLastName1)

//application of callback function

const isEven =(n) => {
    return n%2==0;

}

let printResult= (evenfn, num) =>{
    const isNumEven = evenfn(num);

    console.log(`the number ${num} is even : ${isNumEven}`);
}

printResult(isEven, 16);