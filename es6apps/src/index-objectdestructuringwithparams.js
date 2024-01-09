// function getStock() {
//     return {
//         id: 1,
//         symbol: 'GOOGLE',
//         price: 10000,
//         qty: 111
//     }
// }
// console.log(getStock())

// function getStock(id = 1, symbol = 'google', price = 10000, qty = 111) {
//     return {
//         id: id,
//         symbol: symbol,
//         price: price,
//         qty: qty
//     }
// }
// console.log(getStock())


// function getStock(id = 1, symbol = 'google', price = 10000, qty = 111) {
//     //left:right is same we can remove any one
//     return {
//         id,
//         symbol,
//         price,
//         qty,
//     }
// }
// console.log(getStock(2, 'yahoo', 32, 1000))

// const getStock=(id = 1, symbol = 'google', price = 10000, qty = 111) => {
//     return {
//         id,
//         symbol,
//         price,
//         qty,
//     }
// }
// console.log(getStock(2, 'yahoo', 32, 1000))

const getStock = (id = 1, symbol = 'google', price = 10000, qty = 111) => ({
    id,
    symbol,
    price,
    qty,
})
console.log(getStock(2, 'yahoo', 32, 1000))