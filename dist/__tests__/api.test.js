"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const testDatabase_1 = __importDefault(require("../src/config/testDatabase"));
const app_1 = __importDefault(require("../src/app"));
const todo_controller_1 = __importDefault(require("../src/controllers/todo.controller"));
const todo_routes_1 = __importDefault(require("../src/routes/todo.routes"));
const URL = '/api/todos';
const controller = new todo_controller_1.default(testDatabase_1.default);
const { router } = new todo_routes_1.default(controller);
const app = new app_1.default(router);
const requester = supertest_1.default(app);
describe('api', () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        return testDatabase_1.default.query(`
    CREATE TABLE todos(
       id VARCHAR(255),
       title VARCHAR(255),
       description TEXT,
       completed BOOLEAN,
       color VARCHAR(255)
      );`);
    }));
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        return testDatabase_1.default.query(`INSERT INTO todos (id, title, description, color, completed) VALUES ($1, $2, $3, $4, $5)`, ['123', 'test_to_do', 'test_desc', 'white', false]);
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () { return testDatabase_1.default.query(`DELETE FROM todos`); }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield testDatabase_1.default.query(`DROP TABLE todos;`);
    }));
    it('should return all todos from table', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield requester.get(URL);
        expect(res.status).toEqual(201);
    }));
    it('should add new todo item to db', () => __awaiter(void 0, void 0, void 0, function* () {
        const MOCKED_ITEM = {
            title: 'new_item',
            description: '',
            color: 'red',
        };
        const res = yield requester.post(URL).send(MOCKED_ITEM);
        expect(res.status).toEqual(201);
    }));
    it('should delete todo item from db', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield requester.delete(`${URL}?id=123`);
        expect(res.status).toEqual(201);
    }));
    it('should change todo item', () => __awaiter(void 0, void 0, void 0, function* () {
        const MOCKED_ITEM = {
            title: 'new_item',
            description: '',
            color: 'red',
            completed: true,
        };
        const res = yield requester.patch(`${URL}?id=123`).send(MOCKED_ITEM);
        expect(res.status).toEqual(201);
    }));
});
//# sourceMappingURL=api.test.js.map