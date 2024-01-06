function mul(a, b){
    console.log(a*b)
}

function sq(a){
    console.log(a*a)
}

function mod(a, b){
    console.log(a%b)
}

function div(a, b){
    console.log(a/b)
}

module.exports = {
    multiplication: mul,
    square: sq,
    modulo: mod,
    division: div
}