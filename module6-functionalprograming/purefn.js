//pure function: for same input agruments produce same output and having no side effects.
// function for adding two numbers

let a = 2;

//function is effected by external factor 

function addImpure(x){
    console.log(x+a);
    a++;
}

addImpure(2);
addImpure(2);
addImpure(2);

//pure function with side-effects as console.log is an external RESOURCE used inside the function.
//consdering term state in javascript code running environment (browser, terminal) is also a part of state. 
//use of inbuilt function inside pure function does not make pure function impure.

function addPure1(x, a){
    console.log(x+a);
}

addPure1(2, 3);
addPure1(2, 3);
addPure1(2, 3);

//pure function with no side-effects

function addPure2(x, a){
    return x+a;
}

console.log(addPure2(4, 5));
