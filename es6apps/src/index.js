    import { companyName ,address } from "./util/myutil.js";
    import TodoService from "./services/todo.service.js";

    console.log(companyName,address.city)

    let todo = new TodoService()
    console.log(todo.list())
