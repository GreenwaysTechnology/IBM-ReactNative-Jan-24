//here type inference is enabled dymically
// function add(a, b) {
//     let c = a + b
//     console.log(c)
// }
// add(10, 10)
// add("hello","hai")

// function add(a: number, b: number) {
//     let c = a + b
//     console.log(c)
// }
// add(10, 10)

//add("hello", "hai")

// function add(a: number = 0, b: number = 0) {
//     let c = a + b
//     console.log(c)
// }
// add(10, 10)
// add()

//optional arg: ts feature
function add(a?: number, b?: number) {
    let c = a + b
    console.log(c)
}
add(10, 10)
add()

//return type : implicit and explcit , no return type : void

// //implicit -inferenced type
// function mutliply(a: number = 0, b: number = 0) {
//     // return `Result is ${a * b}`;
//     return a * b
// }
// console.log(mutliply(10, 10))

//implicit -inferenced type
function mutliply(a: number = 0, b: number = 0): number {
    // return `Result is ${a * b}`;
    return a * b
}
console.log(mutliply(10, 10))

const div = (a: number, b: number): number => a / b;
console.log(div(10,2))