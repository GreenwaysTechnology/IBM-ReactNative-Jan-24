//default args
function add(a = 0, b = 0) {
    console.log(`a ${a} b ${b}`)
    return a + b
}
console.log(add(10, 10))
console.log(add())
