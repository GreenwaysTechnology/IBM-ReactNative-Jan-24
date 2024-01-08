//anonymous fun and args 

let add = function (a = 0, b = 0) {
    let c = a + b
    return c 
}

console.log(add(10, 10))
console.log(add())