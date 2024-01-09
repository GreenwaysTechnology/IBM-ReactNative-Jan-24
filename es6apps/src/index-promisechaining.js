const getUser = () => {
    console.info('getUser is called')
    return new Promise((resolve, reject) => {
        let user = {
            name: 'admin',
            password: 'admin'
        }
        // user = undefined
        if (user) {
            setTimeout(resolve, 1000, user)
        } else {
            setTimeout(reject, 1000, { message: 'User not found' })
        }
    })
}

//login 
const login = user => {
    console.info('login is called')
    return new Promise((resolve, reject) => {
        if (user.name === 'admin' && user.password === 'admin') {
            setTimeout(resolve, 1000, 'login success')
        } else {
            setTimeout(reject, 1000, 'login failed')
        }
    })
}


// getUser(user => {
//     login(user, status => {
//         console.log(status)
//     }, err => {
//         console.log(err)
//     })
// }, err => {
//     console.log(err)
// })

// getUser()
//     .then(user => {
//         return login(user)
//     })
//     .then(status => {
//         console.log(status)
//     })
//     .catch(err => {
//         console.log(err)
//     })

getUser()
    .then(user => login(user))
    .then(status => console.log(status))
    .catch(err => console.log(err))