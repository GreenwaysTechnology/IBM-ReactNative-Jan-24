class Employee {
    //instance variables 
    id: number;
    firstName: string;
    lastName: string;
    status: boolean;
    constructor(id: number = 0, firstName: string = "", lastName: string = "", status: boolean = false) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.status = status

    }
}
let emp = new Employee()
//emp.id ="test"
console.log(emp)

emp = new Employee(1,'Subramanian','Murugan',true)
//emp.id ="test"
console.log(emp)