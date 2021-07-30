"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
dotenv_1.default.config();
class TestDatabase {
    constructor() {
        this._pool = new pg_1.Pool({
            connectionString: process.env.TEST_DATABASE_URL,
        });
        this.query = (text, params = []) => this._pool.query(text, params);
        this._pool.on('connect', () => {
            console.log('Test Connection Established!');
        });
    }
}
exports.default = new TestDatabase();
//# sourceMappingURL=testDatabase.js.map