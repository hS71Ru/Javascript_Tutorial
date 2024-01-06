//case 1:
var resumeAts = 88

if(resumeAts >= 80 && resumeAts <= 95){
    console.log('yayy got selected')
}
else{
    console.log('better luck next time')
}

//Case 2:

// above 9.5 , A++
// 9.0 to 9.4 ,A+
// 8.0 to 8.9 ,A
// below 8.0 , F

var studentCGPA = 7.3

if(studentCGPA > 9.5){
    console.log('A++')
}
else if(studentCGPA >= 9.0 && studentCGPA <= 9.4){
    console.log('A+')
}
else if(studentCGPA >= 8.0 && studentCGPA <= 8.9){
    console.log('A')
}
else{
    console.log('F')
}
