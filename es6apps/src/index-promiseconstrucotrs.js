//Promise object creation using Promise Factory apis .

function login(userName, password) {
    if (userName === 'admin' && password === 'admin') {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, 'Success')
        })
    } else {
        return new Promise((resolve, reject) => {
            setTimeout(reject, 1000, 'oops,failed')
        })
    }
}

console.log('start')
login('admin', 'admin')
    .then(status => console.log(status))
    .catch(err => console.log(err))
console.log('end')


