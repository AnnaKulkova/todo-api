import db from '../config/database';

export default {
  createTodo: async (req, res) => {
    const id = String(Date.now());
    const {title, description, color} = req.body;
    try {
      await db.query(
        'INSERT INTO todos (id, title, description, color, completed) VALUES ($1, $2, $3, $4, $5)',
        [id, title, description, color, false]
      );
      res.status(201).send({
        message: 'Todo created',
        body: {
          todo: {id, title, description, color, completed: false}
        }
      })
    }
    catch (e) {
      console.log(e)
    }
  },
  getAllTodos: async (req, res) => {
    try {
      const response = await db.query('SELECT * from todos')
      res.status(201).send({
        body: {
          todos: response.rows,
        },
      })
      return response.rows;
    } catch (e) {
      console.log(e)
    }
  },
  changeTodo: async (req, res) => {
    const {title, description, color, completed} = req.body;
    try {
      await db.query(`
            UPDATE todos 
            SET completed=${completed},
                title='${title}',
                description='${description}',
                color='${color}'
            WHERE id='${req.query.id}'`
      );
      res.status(201).send({
        message: 'Todo updated',
        body: {id: req.query.id, description, color, completed, title}
      })
    } catch (e) {
      console.log(e);
    }
  },
  deleteTodo: async (req, res) => {
    try {
      await db.query(
        `DELETE FROM todos WHERE id='${req.query.id}'`
      );
      res.status(201).send({
        message: 'Todo deleted',
        body: {id: req.query.id},
      });
    } catch (e) {
      console.log(e);
    }
  }
}
