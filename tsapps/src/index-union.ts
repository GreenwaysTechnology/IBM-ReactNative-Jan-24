//here id can hold either number or string
let id: number | string;
id = 1
id = "1"
//id =true

//union type with values
let gender: "Male" | "Female" | "Third"

gender = "Female"
//gender ="foo"

let orderStatus: "Pending" | "Confirmed" | "Rejected";

orderStatus = "Confirmed"

function processOrder(status: "Pending" | "Confirmed" | "Rejected") {
    console.log(status)
}
processOrder("Rejected")