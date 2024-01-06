let a = {}


// if(a){
//     console.log('truthy')
// }else{
//     console.log('falsy')
// }

//question
// An immediately invoked function expression, or IIFE (pronounced iffy), is a function that is called immediately after it is defined. While it may seem peculiar, creating functions that behave in such a way can actually benefit the code that we write



(function() {
    if((-100 && 100 && "0") || 0){
        console.log(1)
        if([] || (0 && false)){
            console.log(2)
        }
        if(infinity && NaN && "false"){
            console.log(3)
            if(""){
                console.log(4)
            }
        }else{
            console.log(5)
            if(({} || false === "") && (null && undefined)){
                console.log(6)
            }
        }
    }

})()

//[] === true //, condition always return 'false' since js compares object by refences not by value
