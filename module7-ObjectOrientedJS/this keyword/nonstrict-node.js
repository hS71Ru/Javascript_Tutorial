//runtime environment - node.js
//mode - nonstrict

console.log(this) //reffered empty object

function displayThis(){
    console.log(this)           //reffered global object carry methods(node.js methods)
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
                    console.log(this) //reffered global object
                } 
                
                myFn3()
    }
}

myObj2.myFn2()