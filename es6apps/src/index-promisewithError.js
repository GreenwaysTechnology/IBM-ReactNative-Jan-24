//Promise object creation using Promise Factory apis .

//simple promise 

function getError() {
    return Promise.reject('oops!')
}

console.log('start')
getError().catch(err => console.log(err))
console.log('end')


