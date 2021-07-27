export default function todoController(database) {
  return {
    changeTodo: async (req, res) => {
      const { title, description, color, completed } = req.body;
      try {
        await database.query(`
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
    },
    createTodo: async (req, res) => {
      const id = String(Date.now());
      const { title, description, color } = req.body;
      try {
        await database.query(
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
    },
    deleteTodo: async (req, res) => {
      try {
        await database.query(`DELETE FROM todos WHERE id='${req.query.id}'`);
        res.status(201).send({
          body: { id: req.query.id },
          message: 'Todo deleted',
        });
      } catch (e) {
        console.log(e);
      }
    },
    getAllTodos: async (req, res) => {
      try {
        const response = await database.query('SELECT * from todos');
        res.status(201).send({
          body: {
            todos: response.rows,
          },
        });
      } catch (e) {
        console.log(e);
      }
    },
  };
}
