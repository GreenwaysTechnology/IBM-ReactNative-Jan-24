//callback chaining
//resolve = success,
//reject = failure
const getUser = (resolve, reject) => {
    console.info('getUser is called')
    let user = {
        name: 'admin',
        password: 'admin'
    }
    user = undefined
    if (user) {
        setTimeout(resolve, 1000, user)
    } else {
        setTimeout(reject, 1000, { message: 'User not found' })
    }
}

//login 
const login = (user, resolve, reject) => {
    console.info('login is called')

    if (user.name === 'admin' && user.password === 'admin') {
        setTimeout(resolve, 1000, 'login success')
    } else {
        setTimeout(reject, 1000, 'login failed')
    }
}


getUser(user => {
    login(user, status => {
        console.log(status)
    }, err => {
        console.log(err)
    })
}, err => {
    console.log(err)
})