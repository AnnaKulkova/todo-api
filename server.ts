import App from './src/app';
import db from './src/config/database';
import TodoRouter from './src/routes/todo.routes';
import TodoController from './src/controllers/todo.controller';

const port = Number(process.env.PORT) || 3000;

const controller = new TodoController(db);

const { router } = new TodoRouter(controller);

const app = new App(router);

app.listen(port);
