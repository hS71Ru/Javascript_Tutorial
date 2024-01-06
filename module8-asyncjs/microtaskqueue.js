// code in promises are handled with micro task queue.
// higher priority than task queue(callback queue) , that handle code in callback function

function logA(){
    console.log('A')
}

function logB(){
    console.log('B')
}

function logC(){
    console.log('C')
}

function logD(){
    console.log('D')
}

logA()

setTimeout(logB , 0)

Promise.resolve().then(logC)

logD()

//o/p- A,D,C,B