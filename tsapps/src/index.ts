//Generics

//without generics: array
let list = [1, "test", true] //this is not type safe array.

//array type without generics syntax
let numList: number[] = [1, 3]
let nameList: Array<string> = ["a", "b"]

//product Array
class Product {
    id: number
    name: string
}

let productList: Array<Product> = [
    { id: 1, name: 'phone' },
    { id: 1, name: 'phone' }
]

//promises and generics

// function getList(): Promise<Array<Product>> {
//     return Promise.resolve(productList)
// }
function getList(): Promise<Product[]> {
    return Promise.resolve(productList)
}
async function main() {
    const products = await getList()
    console.log(products);

}
main()





