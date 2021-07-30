import dotenv from 'dotenv';
import { Pool } from 'pg';
import { IDatabase } from '../interfaces';

dotenv.config();

class TestDatabase implements IDatabase {
  private _pool = new Pool({
    connectionString: process.env.TEST_DATABASE_URL,
  });

  constructor() {
    this._pool.on('connect', () => {
      console.log('Test Connection Established!');
    });
  }

  public query = (text: string, params = []) => this._pool.query(text, params);
}

export default new TestDatabase();
