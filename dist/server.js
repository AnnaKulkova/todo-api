"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./src/app"));
const database_1 = __importDefault(require("./src/config/database"));
const todo_routes_1 = __importDefault(require("./src/routes/todo.routes"));
const todo_controller_1 = __importDefault(require("./src/controllers/todo.controller"));
const port = Number(process.env.PORT) || 3000;
const controller = new todo_controller_1.default(database_1.default);
const { router } = new todo_routes_1.default(controller);
const app = new app_1.default(router);
app.listen(port);
//# sourceMappingURL=server.js.map