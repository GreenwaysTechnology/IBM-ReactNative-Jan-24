//Promise object creation using Promise Factory apis .

//simple promise 

function getUser() {
    return Promise.resolve('Subramanian')
}

console.log('start')
getUser().then(res => console.log(res))
console.log('end')


