import express from 'express'
import { getAllTodos, getTodoById, createTodo, deleteTodo, updateTodo } from '../controllers/todosController.js'

const router = express.Router();

router.get('/', getAllTodos);
router.get('/:id', getTodoById);
router.post('/', createTodo);
router.delete('/:id', deleteTodo);
router.put('/:id', updateTodo);

export default router;