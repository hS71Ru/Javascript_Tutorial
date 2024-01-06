console.log(this)   //reffered window object having different methods(browser methods) in key-value pairs.

function displayThis(){
    console.log(this)           //reffered window object having different methods(browser methods) in key-value pairs.
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
                    console.log(this)   //reffered window object having different methods(browser methods) in key-value pairs.
                } 
                
                myFn3()
    }
}

myObj2.myFn2()
