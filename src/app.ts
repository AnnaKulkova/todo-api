import express from 'express';
import cors from 'cors';
import index from './routes/index';
import todoRoute from './routes/todo.routes';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({type: 'application/vnd.api+json'}));
app.use(cors());

app.use(index);
app.use('/api/', todoRoute);
export default app;
