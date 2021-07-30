import express from 'express';
import { IDatabase, ITodoController } from '../interfaces';

class TodoController implements ITodoController {
  private database;

  constructor(database: IDatabase) {
    this.database = database;
  }

  public changeTodo = async (req: express.Request, res: express.Response) => {
    const { title, description, color, completed } = req.body;
    try {
      await this.database.query(`
            UPDATE todos
            SET completed=${completed},
                title='${title}',
                description='${description}',
                color='${color}'
            WHERE id='${req.query.id}'`);
      res.status(201).send({
        body: {
          color,
          completed,
          description,
          id: req.query.id,
          title,
        },
        message: 'Todo updated',
      });
    } catch (e) {
      console.log(e);
    }
  };

  public createTodo = async (req: express.Request, res: express.Response) => {
    const id = String(Date.now());
    const { title, description, color } = req.body;
    try {
      await this.database.query(
        'INSERT INTO todos (id, title, description, color, completed) VALUES ($1, $2, $3, $4, $5)',
        [id, title, description, color, false]
      );
      res.status(201).send({
        body: {
          todo: {
            color,
            completed: false,
            description,
            id,
            title,
          },
        },
        message: 'Todo created',
      });
    } catch (e) {
      console.log(e);
    }
  };

  public deleteTodo = async (req: express.Request, res: express.Response) => {
    try {
      await this.database.query(`DELETE FROM todos WHERE id='${req.query.id}'`);
      res.status(201).send({
        body: { id: req.query.id },
        message: 'Todo deleted',
      });
    } catch (e) {
      console.log(e);
    }
  };

  public getAllTodos = async (req: express.Request, res: express.Response) => {
    try {
      const response = await this.database.query('SELECT * from todos');
      res.status(201).send({
        body: {
          todos: response.rows,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };
}

export default TodoController;
