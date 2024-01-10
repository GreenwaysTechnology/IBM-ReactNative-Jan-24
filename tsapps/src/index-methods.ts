
class TodoService {
    constructor() {

    }
    findAll(): string {
        return "todos"
    }
    findById(id:number):string {
        return `id ${id}`
    }
}
let todoService = new TodoService()
console.log(todoService.findAll())
console.log(todoService.findById(1))