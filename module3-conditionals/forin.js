//in javascript, the for-in loop allows you to loop through the properties of an object.
//the statements of code found within the loop body will be executed once for each prooerty of the object.


var colors = {
    primary : 'red',
    secondary : 'blue',
    tertiary : 'green'
}

for(var color in colors){
    console.log(colors[color])
    console.log(color+'->'+colors[color])
}

var colorsArray = ['white', 'black', 'yellow', 'pink', 'orange']

for(var clr in colorsArray){
    console.log(clr)
    console.log(clr+'->'+colorsArray[clr])
}

//arrays in javascript is also treated as objects