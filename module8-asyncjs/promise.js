//producing promise

// let myPromise = new Promise((resolve, reject) => {
//     let a=9
//     let b=91

//     setTimeout(()=>{
//         if(a===b){
//             resolve('values are equal')
//         }
//         else{
//             reject('values are notEqual ')
//         }
//     }, 2000)
// })


// console.log(myPromise) //o/p- Promise { <pending>} , pending phase.


//consuming promise
// myPromise.then((result) => {
//     console.log(result)       //o/p- vlaues are equal , resolve(), fulfilled phase.
// })

// myPromise.catch((failedResult) => {
//     console.log(failedResult)       //o/p- vlaues are notEqual , reject(), rejected phase.
// })

//promise in settled phase.

//question 1

// const firstPromise = new Promise((res, rej) => {
//     setTimeout(res, 500, 'one');
//    });
   
//    const secondPromise = new Promise((res, rej) => {
//     setTimeout(res, 100, 'two');
//    });
//    Promise.race([firstPromise, secondPromise]).then(res => console.log(res));

//question 2

// const myPromise = () => Promise.resolve('I have resolved!');

// function firstFunction() {
//  myPromise().then(res => console.log(res));
//  console.log('second');
// }

// async function secondFunction() {
//  console.log(await myPromise());
//  console.log('second');
// }

// firstFunction();
// secondFunction();

//question 3

// var p = new Promise((resolve, reject) => {
//     reject(Error('Promise Fails!'))
//     })
//     p.catch(error => console.log(error.message))
//     p.catch(error => console.log(error.message))


//question 4
    async function f() {
        let result = 'new!';
        let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done!'), 1000);
        });
       result = await promise;
       console.log(result);
       }
       
       f();