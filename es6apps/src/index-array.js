//arrays:

let employees = [
    {
        id: 1,
        name: 'A',
        address: {
            city: 'a1'
        }
    },
    {
        id: 2,
        name: 'B',
        address: {
            city: 'b1'
        }
    }
]
//
employees.forEach(emp => {
    console.log(emp.id, emp.name, emp.address.city)
})