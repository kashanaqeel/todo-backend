const pool = require("../db");

class TodoService {
    async getAllTodos() {
        const todos = await pool.query("SELECT * FROM todo");
        return todos.rows;
    }

    async createTodo(todoData) {
        const { title, description, status = 'pending' } = todoData;
        const newTodo = await pool.query(
            "INSERT INTO todo (title, description, status) VALUES($1, $2, $3) RETURNING *",
            [title, description, status]
        );
        return newTodo.rows[0];
    }

    async updateTodo(id, todoData) {
        const { title, description, status } = todoData;
        const updateTodo = await pool.query(
            "UPDATE todo SET title = $1, description = $2, status = $3 WHERE id = $4 RETURNING *",
            [title, description, status, id]
        );

        if (updateTodo.rowCount === 0) {
            return null;
        }

        return updateTodo.rows[0];
    }

    async markAsCompleted(id, status) {
        if (!status) {
            throw new Error("Status is required");
        }

        const updateTodo = await pool.query(
            "UPDATE todo SET status = $1 WHERE id = $2 RETURNING *",
            [status, id]
        );

        return updateTodo.rowCount > 0 ? updateTodo.rows[0] : null;
    }

    async deleteTodo(id) {
        const deleteTodo = await pool.query(
            "DELETE FROM todo WHERE id = $1 RETURNING *",
            [id]
        );

        if (deleteTodo.rowCount === 0) {
            return null;
        }

        return deleteTodo.rows[0];
    }

    async deleteAllTodos(){
        const deleteAll = await pool.query("DELETE FROM todo RETURNING *");
        if (deleteAll.rowCount === 0) {
            return null;
        }

        return deleteAll.rows;
    }
}

module.exports = new TodoService();