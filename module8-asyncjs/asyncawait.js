function placeOrder(drink){
    return new Promise((resolve, reject) => {
        if(drink==='coffee'){
            resolve('order accepted')
        }
        else{
            reject('order rejected')
        }
    })

}

function processOrder(order){
    return new Promise((resolve) => {
        console.log('order is being processed')
        resolve(`${order} and is served`)
    })
}

//o/p via promise.

// placeOrder('tea').then((orderPlaced) => {
//     console.log(orderPlaced)
//     let orderIsProcessed = processOrder(orderPlaced)
//     return orderIsProcessed
// }).then((processedOrder) => {
//     console.log(processedOrder)
// }).catch((error) => {
//     console.log(error)
// }) // chaining of promises.


//o/p via async await

async function serverOrder(){


    try{ 

        let orderPlaced =  await placeOrder('tea')
        console.log(orderPlaced)
        let orderProcessed = await processOrder(orderPlaced)
        console.log(orderProcessed)

    }
    catch(error){
        console.log(error)
    }
    
}

serverOrder()

