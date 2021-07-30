import cors from 'cors';
import express, { Express, IRouter } from 'express';
import { IApp } from './interfaces';

class App implements IApp {
  private readonly _app: Express;

  constructor(router: IRouter) {
    this._app = express();
    this._app.use(express.urlencoded({ extended: true }));
    this._app.use(express.json());
    this._app.use(express.json({ type: 'application/vnd.api+json' }));
    this._app.use(cors());
    this._app.use(router);
  }

  get app() {
    return this._app;
  }

  public listen = (port: number) => {
    this._app.listen(port, (err) => {
      if (err) {
        return console.error(err);
      }
      return console.log(`server is listening on ${port}`);
    });
  };
}

export default App;
