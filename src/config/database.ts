import dotenv from 'dotenv';
import { Pool } from 'pg';
import { IDatabase } from '../interfaces';

dotenv.config();

class Database implements IDatabase {
  private _pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  constructor() {
    this._pool.on('connect', () => {
      console.log('Connection established!');
    });
  }

  public query = (text: string, params = []) => this._pool.query(text, params);
}

export default new Database();
