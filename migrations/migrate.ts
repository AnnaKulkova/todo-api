import db from '../src/config/database';

db.query(`CREATE TABLE IF NOT EXISTS public.todos (
        id VARCHAR(255),
        title VARCHAR(255),
        description TEXT,
        completed BOOLEAN,
        color VARCHAR(255));
  `);
