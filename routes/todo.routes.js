const express = require("express");
const todoController = require("../controllers/todo.controller");

const router = express.Router();

router.get("/", todoController.getAllTodos.bind(todoController));
router.post("/", todoController.createTodo.bind(todoController));
router.put("/:id", todoController.updateTodo.bind(todoController));
router.delete("/:id", todoController.deleteTodo.bind(todoController));
router.delete("/", todoController.deleteAllTodos.bind(todoController));

module.exports = router;