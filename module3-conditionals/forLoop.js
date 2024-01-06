//loops are the statement that is use to control flow of program & to do repeatative task.

var a= 'hello from loop files'

for(var i=0; i<10; i++){
    console.log(a)
}

var num = [2, 4, 6, 10 ,34]

var squaredArr = [] //empty array

for(var i=0; i<num.length; i++){

    squaredArr.push( num[i]*num[i] )
}

console.log(squaredArr)

