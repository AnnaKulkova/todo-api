"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_promise_router_1 = __importDefault(require("express-promise-router"));
const todo_controller_1 = __importDefault(require("../controllers/todo.controller"));
const router = express_promise_router_1.default();
exports.default = (database) => {
    const controller = todo_controller_1.default(database);
    router.post('/api/todos', controller.createTodo);
    router.get('/api/todos', controller.getAllTodos);
    router.patch('/api/todos', controller.changeTodo);
    router.delete('/api/todos', controller.deleteTodo);
    return router;
};
//# sourceMappingURL=todo.routes.js.map