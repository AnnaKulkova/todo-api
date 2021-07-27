import cors from 'cors';
import express from 'express';
import index from './routes';
import todoRoute from './routes/todo.routes';

const app = express();

export default (database) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.json({ type: 'application/vnd.api+json' }));
  app.use(cors());

  app.use(index);
  app.use(todoRoute(database));
  return app;
};
