
function connect(cb) {
    cb('sql')
}
let sqlconnect = function (status) {
    console.log(status)
}
connect(sqlconnect)

connect(function (status) {
    console.log(status)
})