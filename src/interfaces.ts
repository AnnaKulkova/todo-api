import express from 'express';

export interface IDatabase {
  query: (text: string, params: [{ [key: string]: [value: any] }]) => void;
}

export interface IApp {
  listen: (port: number) => void;
}

export interface ITodoController {
  changeTodo: (req: express.Request, res: express.Response) => void;
  createTodo: (req: express.Request, res: express.Response) => void;
  deleteTodo: (req: express.Request, res: express.Response) => void;
  getAllTodos: (req: express.Request, res: express.Response) => void;
}
