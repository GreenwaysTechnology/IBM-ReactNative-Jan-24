
let add = (a = 0, b = 0) => {
    return a + b
}
console.log(add(10, 10))

//if function has return statement only: we can remove return keyword and {}

add = (a = 0, b = 0) => a + b
console.log(add(10, 10))

//if function takes single args,without default value and returns the same,we can remove {},return statement, ()

let getStock = stock => stock 

console.log(getStock(10))
