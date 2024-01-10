class Employee {
    //public or private keywords convert constructor arg variable into instance variable
    constructor(public id: number = 0, public firstName: string = "", public lastName: string = "", public  status: boolean = false) { }
}
let emp = new Employee(1, "Subramanian", "Murugan", false)
console.log(emp.id)
console.log(emp.firstName)
console.log(emp.lastName)
console.log(emp.status)