const fs = require('fs')

console.log('first line')

//Reading a File Synchronously
// let data = fs.readFileSync('text.txt')

// console.log('reading data -> '+ data)

// let data1 = fs.readFileSync('text1.txt')

// console.log('reading data -> '+ data1)


//Reading a File asynchronously attached with callback function
//parallel execution of callback function

// fs.readFile('text.txt', cb1)

// function cb1(err, data){
//     if(err){
//         console.log(err)
//     }
//     console.log('reading data -> '+ data)
// }

// fs.readFile('text1.txt', cb2)

// function cb2(err, data){
//     if(err){
//         console.log(err)
//     }
//     console.log('reading data -> '+ data)
// }

// fs.readFile('text2.txt', cb3)

// function cb3(err, data){
//     if(err){
//         console.log(err)
//     }
//     console.log('reading data -> '+ data)
// }

//serial execution of callback function

fs.readFile('text.txt', cb1)

function cb1(err, data){
    if(err){
        console.log(err)
    }
    console.log('reading data -> '+ data)
    fs.readFile('text1.txt', cb2)
}



function cb2(err, data){
    if(err){
        console.log(err)
    }
    console.log('reading data -> '+ data)
    fs.readFile('text2.txt', cb3)

}


function cb3(err, data){
    if(err){
        console.log(err)
    }
    console.log('reading data -> '+ data)
}

console.log('last line')