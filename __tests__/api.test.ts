import request from 'supertest';
import db from '../src/config/testDatabase';
import createApp from '../src/createApp';

const URL = '/api/todos';

const app = createApp(db);

const requester = request(app);

describe('api', () => {
  beforeAll(async () =>
    db.query(`
    CREATE TABLE todos(
       id VARCHAR(255),
       title VARCHAR(255),
       description TEXT,
       completed BOOLEAN,
       color VARCHAR(255)
      );`)
  );

  beforeEach(async () =>
    db.query(
      `INSERT INTO todos (id, title, description, color, completed) VALUES ($1, $2, $3, $4, $5)`,
      ['123', 'test_to_do', 'test_desc', 'white', false]
    )
  );

  afterEach(async () => db.query(`DELETE FROM todos`));

  afterAll(async () => {
    await db.query(`DROP TABLE todos;`);
  });

  it('should return all todos from table', async () => {
    const res = await requester.get(URL);
    expect(res.status).toEqual(201);
  });

  it('should add new todo item to db', async () => {
    const MOCKED_ITEM = {
      title: 'new_item',
      description: '',
      color: 'red',
    };
    const res = await requester.post(URL).send(MOCKED_ITEM);
    expect(res.status).toEqual(201);
  });

  it('should delete todo item from db', async () => {
    const res = await requester.delete(`${URL}?id=123`);
    expect(res.status).toEqual(201);
  });

  it('should change todo item', async () => {
    const MOCKED_ITEM = {
      title: 'new_item',
      description: '',
      color: 'red',
      completed: true,
    };
    const res = await requester.patch(`${URL}?id=123`).send(MOCKED_ITEM);
    expect(res.status).toEqual(201);
  });
});
