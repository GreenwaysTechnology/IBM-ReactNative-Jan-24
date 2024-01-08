function add(a, b) {
  console.log(a,b)
}
add(10, 10)
let x = 10;
let y = 20
add(x, y)


function connect(a) {
    a()
}

let sqlconnect = function() {
    console.log('sqlconnect')
}
connect(sqlconnect)

connect(function () {
    console.log('sqlconnect')
})