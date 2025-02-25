const express = require("express");
const todoController = require("../controllers/todo.controller");

const router = express.Router();

router.get("/", todoController.getAllTodos);
router.post("/", todoController.createTodo);
router.put("/:id", todoController.updateTodo);
router.put("/:id/completed", todoController.markAsCompleted);
router.delete("/:id", todoController.deleteTodo);
router.delete("/", todoController.deleteAllTodos);

module.exports = router;