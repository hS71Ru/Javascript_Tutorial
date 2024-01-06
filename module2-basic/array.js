//Array provides an ordered collection of data

var arr=[1, 'hello', true, 12.8]

console.log(arr)

//acess array element

var temp = arr[1]

console.log(temp)

console.log(arr[3])

console.log(arr[5])  //o/p=undefined

//replace array element

arr[1]='lotus'

arr[2]='tesla'

console.log(arr)

arr[4]='benz'     

console.log(arr)

console.log('length of array is', arr.length)   //length is property of array

//inbuilt js array method

var arr2 = [1, 34, 56 ,78]

var a = arr2.pop()                //pop method 

console.log(a)
console.log('pop array', arr2)

arr2.push(69)                       //push method
console.log('push array', arr2)

var b = arr2.shift()             //shift method

console.log(b)
console.log('shift array', arr2)

arr2.unshift(-17)                     //unshift method
console.log('unshift array', arr2)