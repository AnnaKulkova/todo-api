import express from 'express';
import cors from 'cors';
import index from './routes';
import todoRoute from './routes/todo.routes';

const app = express();

export default function (database) {

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.json({type: 'application/vnd.api+json'}));
  app.use(cors());

  app.use(index);
  app.use(todoRoute(database));
  return app;
}
