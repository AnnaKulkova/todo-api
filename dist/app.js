"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
const todo_routes_1 = __importDefault(require("./routes/todo.routes"));
const app = express_1.default();
const port = 3000;
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(express_1.default.json({ type: 'application/vnd.api+json' }));
app.use(cors_1.default());
app.use(index_1.default);
app.use('/todo', todo_routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map