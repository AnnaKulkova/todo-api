"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
dotenv_1.default.config();
class Database {
    constructor() {
        this._pool = new pg_1.Pool({
            connectionString: process.env.DATABASE_URL,
        });
        this.query = (text, params = []) => this._pool.query(text, params);
        this._pool.on('connect', () => {
            console.log('Connection established!');
        });
    }
}
exports.default = new Database();
//# sourceMappingURL=database.js.map