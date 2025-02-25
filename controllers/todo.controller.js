const todoService = require("../services/todo.service");

class TodoController {
    async getAllTodos(req, res) {
        try {
            const todos = await todoService.getAllTodos();
            res.json({ data: todos });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async createTodo(req, res) {
        try {
            const todo = await todoService.createTodo(req.body);
            res.status(201).json({
                data: todo,
                msg: "Todo added",
                success: true
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async updateTodo(req, res) {
        try {
            const { id } = req.params;
            const { title, description: desc, status } = req.body;

            const todoData = {
                title,
                description: desc,
                status
            };

            const updatedTodo = await todoService.updateTodo(id, todoData);

            if (!updatedTodo) {
                return res.status(404).json({ msg: "Todo not found" });
            }

            res.json({
                data: updatedTodo,
                msg: "Todo updated",
                success: true
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async deleteTodo(req, res) {
        try {
            const { id } = req.params;
            const deletedTodo = await todoService.deleteTodo(id);

            if (!deletedTodo) {
                return res.status(404).json({ msg: "Todo not found" });
            }

            res.json({
                data: deletedTodo,
                msg: "Todo deleted",
                success: true
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async deleteAllTodos(req, res){
        try{
            const result = await todoService.deleteAllTodos();

            if(result){
                res.json({success: true});
            }
        } catch(error){
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new TodoController();