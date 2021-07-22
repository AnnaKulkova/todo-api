import promiseRouter from 'express-promise-router';
import todoController from '../controllers/todo.controller';

const router = promiseRouter();
router.post('/todos', todoController.createTodo);
router.get('/todos', todoController.getAllTodos);
router.patch('/todos', todoController.changeTodo);
router.delete('/todos', todoController.deleteTodo);

export default router;
