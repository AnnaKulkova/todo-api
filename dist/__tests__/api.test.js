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
const createApp_1 = __importDefault(require("../src/createApp"));
const URL = '/todos';
const app = createApp_1.default(testDatabase_1.default);
const requester = supertest_1.default(app);
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield testDatabase_1.default.query(`
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
afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
    return testDatabase_1.default.query(`DELETE FROM todos`);
}));
afterAll(() => {
    testDatabase_1.default.query(`DROP TABLE todos;`);
});
describe('api', () => {
    it('should return all todos from table', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield requester.get(URL);
        expect(res.body.body.todos).toEqual([{
                id: '123',
                title: 'test_to_do',
                description: 'test_desc',
                color: 'white',
                completed: false
            }]);
    }));
});
//# sourceMappingURL=api.test.js.map