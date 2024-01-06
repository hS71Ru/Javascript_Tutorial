//setYimeout(cb, 2000)

console.log('before')

function greet(){
    console.log('hello from setTimout')
}

setTimeout(greet, 5000)

console.log('after')