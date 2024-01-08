

// function connect(cb) {
//     cb('sql')
// }
let connect = cb => cb('sql')
// let sqlconnect = function(status){
//     console.log(status)
// }
let sqlconnect = (status) => console.log(status)
connect(sqlconnect)

connect(function (status) {
    console.log(status)
})
connect(status => console.log(status))
