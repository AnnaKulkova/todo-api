import promiseRouter from 'express-promise-router';

import { IRouter } from 'express';
import { ITodoController } from '../interfaces';

class TodoRouter implements IRouter {
  private _router = promiseRouter();

  private _controller: ITodoController;

  constructor(controller: ITodoController) {
    this._controller = controller;
    this._router.post('/api/todos', this._controller.createTodo);
    this._router.get('/api/todos', this._controller.getAllTodos);
    this._router.patch('/api/todos', this._controller.changeTodo);
    this._router.delete('/api/todos', this._controller.deleteTodo);
  }

  get router() {
    return this._router;
  }
}

export default TodoRouter;
