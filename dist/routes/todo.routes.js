"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_promise_router_1 = __importDefault(require("express-promise-router"));
const todo_controller_1 = __importDefault(require("../controllers/todo.controller"));
express_promise_router_1.default().post('/todos', todo_controller_1.default.createTodo);
exports.default = express_promise_router_1.default;
//# sourceMappingURL=todo.routes.js.map