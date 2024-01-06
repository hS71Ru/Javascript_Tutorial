// the for of statement creates a loop iterating over iterable objects.
//including: built-in string, array, array-like objects like NodeList, Map, Set.

var scores = [23, 45, 67, 32]

for(var score of scores){
    score = score+34
    console.log(score)
}

//diff in for-in and for-of
//variable inside the loop defines key and value respectively.

//entries method for accessing the index of array

var colors = ['b', 'g', 'w', 'p']

for(var [index, color] of colors.entries()){
    console.log(index+'->'+color)
}

//strings

var str = 'stirng'

for(var ch of str){
    console.log(ch)
}


let num=2;
let num1=0o2;
if(num==num1)
console.log('t')
else
console.log('f')