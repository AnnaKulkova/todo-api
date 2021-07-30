"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_promise_router_1 = __importDefault(require("express-promise-router"));
class TodoRouter {
    constructor(controller) {
        this._router = express_promise_router_1.default();
        this._controller = controller;
        this._router.post('/api/todos', this._controller.createTodo);
        this._router.get('/api/todos', this._controller.getAllTodos);
        this._router.patch('/api/todos', this._controller.changeTodo);
        this._router.delete('/api/todos', this._controller.deleteTodo);
    }
    get router() {
        return this._router;
    }
}
exports.default = TodoRouter;
//# sourceMappingURL=todo.routes.js.map