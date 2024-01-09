//async programming using callbacks.

// function sayHello(callback) {
//     setTimeout(callback, 1000,'Hello')
// }
// console.log('start')
// sayHello(function () {
//     console.log('hello')
// })
// console.log('end')

const sayHello = callback => setTimeout(callback, 1000, 'Hello')
console.log('start')
sayHello(message => console.log(message))
console.log('end')