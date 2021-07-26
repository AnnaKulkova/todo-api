import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.TEST_DATABASE_URL,
});

pool.on('connect', () => {
  console.log('Test Connection Established!');
});

export default {
  query: async (text, params = []) => pool.query(text, params),
};
