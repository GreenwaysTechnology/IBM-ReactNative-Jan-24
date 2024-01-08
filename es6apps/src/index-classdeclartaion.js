class Employee {
    //instance variables
    id = 10
    name = 'Subramanian'

    //instance methods
    calculateSalary(noofdays) {
        return noofdays * 100
    }
}
//how to create object 
//let -keyword
//emp -variable
//new is keyword 
//Employee() - constructor call 
let emp = new Employee()

console.log(emp.id,emp.name,emp.calculateSalary(5))