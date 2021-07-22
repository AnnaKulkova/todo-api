"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_promise_router_1 = __importDefault(require("express-promise-router"));
const todo_controller_1 = __importDefault(require("../controllers/todo.controller"));
const router = express_promise_router_1.default();
router.post('/todos', todo_controller_1.default.createTodo);
router.get('/todos', todo_controller_1.default.getAllTodos);
router.patch('/todos', todo_controller_1.default.changeTodo);
router.delete('/todos', todo_controller_1.default.deleteTodo);
exports.default = router;
//# sourceMappingURL=todo.routes.js.map