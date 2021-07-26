import promiseRouter from 'express-promise-router';
import todoController from '../controllers/todo.controller';

const router = promiseRouter();

export default function (database) {
  const controller = todoController(database);
  router.post('/api/todos', controller.createTodo);
  router.get('/api/todos', controller.getAllTodos);
  router.patch('/api/todos', controller.changeTodo);
  router.delete('/api/todos', controller.deleteTodo);
  return router;
}
