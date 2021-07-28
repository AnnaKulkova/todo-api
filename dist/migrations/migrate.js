"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../src/config/database"));
database_1.default.query(`CREATE TABLE IF NOT EXISTS public.todos (
        id VARCHAR(255),
        title VARCHAR(255),
        description TEXT,
        completed BOOLEAN,
        color VARCHAR(255));
  `);
//# sourceMappingURL=migrate.js.map