class Employee {
    //instance variables 
    id: number //implicit public
    public firstName: string
    public lastName: string
    public status: boolean

    constructor(id: number = 0, firstName: string = "", lastName: string = "", status: boolean = false) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.status = status
    }
    public calcualteSalary():number{
        return 100
    }
}
let emp = new Employee(1, "Subramanian", "Murugan", false)
console.log(emp.id)
console.log(emp.firstName)
console.log(emp.lastName)
console.log(emp.status)