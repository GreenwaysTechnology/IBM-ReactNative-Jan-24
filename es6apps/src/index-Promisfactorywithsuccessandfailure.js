//Promise object creation using Promise Factory apis .

function login(userName, password) {
    if (userName === 'admin' && password === 'admin') {
        return Promise.resolve('Success')
    } else {
        return Promise.reject('Opps!Failed')
    }
}

console.log('start')
login('admin', 'admin')
    .then(status => console.log(status))
    .catch(err => console.log(err))
console.log('end')


