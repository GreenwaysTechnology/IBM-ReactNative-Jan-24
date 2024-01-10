//type for literal object can be defined- using class,interface,type


// class Employee {
//     id: number;
//     name: string;
// }

interface Employee {
    id: number;
    name: string;
}
let employee: Employee = {
    id: 1,
    name: 'Subramanain'
}

interface Product {
    //required properties
    id: number
    name: string
    //optional properties
    status?: boolean
    qty?: number
    price?: number
}
let product: Product = {
    id: 1,
    name: 'Iphone'
}
