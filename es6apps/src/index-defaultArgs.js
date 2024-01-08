//default args
function add(a = 0, b = 0) {
    console.log(`a ${a} b ${b}`)
    let c = a + b
    console.log(`c ${c}`)
}
add(10, 10)
add()
