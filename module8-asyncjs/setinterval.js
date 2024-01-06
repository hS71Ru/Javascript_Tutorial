//setinterval(cb, 1000)

console.log('before')

function greet(){
    console.log('hello from setinterval')
}

let timer = setInterval(greet, 2000)

setTimeout(function(){
    clearInterval(timer)
}, 5000)

console.log('after')