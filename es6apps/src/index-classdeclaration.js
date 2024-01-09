class Employee {
    //instance variables
    id
    name
    //constructors
    constructor(id = 0, name = 'defaultName') {
        this.id = id
        this.name = name
    }
    //instance methods
    calculateSalary(noofdays) {
        return noofdays * 100
    }
}
let emp = new Employee(1, 'Subramanian')

console.log(emp.id, emp.name, emp.calculateSalary(5))