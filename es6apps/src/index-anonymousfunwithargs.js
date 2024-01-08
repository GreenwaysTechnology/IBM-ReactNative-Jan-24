//anonymous fun and args 

let add = function (a = 0, b = 0) {
    let c = a + b
    console.log(`C ${c}`)
}

add(10, 10)
add()