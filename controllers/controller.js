

let todoStore = [];


const defaultController = (req, res) =>{
       res.render('index',{todos: todoStore});
}


const addTodoController = (req,res) =>{
    
    console.log("Add Todo");
    console.log("body", req.body.todo);
    
    let todoObj = {
        id: todoStore.length + 1,
        todo: req.body.todo
    }
    
    console.log("Obj", todoObj);
    
    todoStore = [...todoStore, todoObj]
    console.log("Store", todoStore);
 
    res.redirect('/');
     
}


const editTodoController = (req, res) =>{
    console.log(req.params);
    let {id} = req.params
    let singleTodo = todoStore.find((todo) =>{
        return todo.id == id
    })
    console.log("Single Todo..???", singleTodo);
    
    res.render('editTodo',{singleTodo});    


}

const updateTodoController = (req, res) =>{

    console.log("BODY>>>",req.body);
    
    

}


module.exports = {defaultController,addTodoController,editTodoController,updateTodoController}