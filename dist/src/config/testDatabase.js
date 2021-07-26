"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const pool = new pg_1.Pool({
    connectionString: process.env.TEST_DATABASE_URL
});
pool.on('connect', () => {
    console.log('Test Connection Established!');
});
exports.default = {
    query: (text, params = []) => pool.query(text, params),
};
//# sourceMappingURL=testDatabase.js.map