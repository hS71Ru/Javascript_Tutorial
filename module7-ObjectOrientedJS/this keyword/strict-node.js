'use strict'

//runtime environment - node.js
//mode - strict

console.log(this)  // reffered empty object

function displayThis(){
    console.log(this)             //o/p-undefined
}

displayThis()

let myObj = {
    name : 'harsh singh ',
    age : 22,
    myFn1 : function(){
        console.log(this)       //reffered object itself
    }
}

myObj.myFn1()

let myObj2 = {
    name : 'harsh singh ',
    age : 22,
    myFn2 : function(){
                function myFn3(){
                    console.log(this)      //o/p-undefined
                } 
                
                myFn3()
    }
}

myObj2.myFn2()