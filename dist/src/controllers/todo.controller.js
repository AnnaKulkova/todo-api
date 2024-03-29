"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class TodoController {
    constructor(database) {
        this.changeTodo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { title, description, color, completed } = req.body;
            try {
                yield this.database.query(`
            UPDATE todos
            SET completed=${completed},
                title='${title}',
                description='${description}',
                color='${color}'
            WHERE id='${req.query.id}'`);
                res.status(201).send({
                    body: {
                        color,
                        completed,
                        description,
                        id: req.query.id,
                        title,
                    },
                    message: 'Todo updated',
                });
            }
            catch (e) {
                console.log(e);
            }
        });
        this.createTodo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = String(Date.now());
            const { title, description, color } = req.body;
            try {
                yield this.database.query('INSERT INTO todos (id, title, description, color, completed) VALUES ($1, $2, $3, $4, $5)', [id, title, description, color, false]);
                res.status(201).send({
                    body: {
                        todo: {
                            color,
                            completed: false,
                            description,
                            id,
                            title,
                        },
                    },
                    message: 'Todo created',
                });
            }
            catch (e) {
                console.log(e);
            }
        });
        this.deleteTodo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.database.query(`DELETE FROM todos WHERE id='${req.query.id}'`);
                res.status(201).send({
                    body: { id: req.query.id },
                    message: 'Todo deleted',
                });
            }
            catch (e) {
                console.log(e);
            }
        });
        this.getAllTodos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.database.query('SELECT * from todos');
                res.status(201).send({
                    body: {
                        todos: response.rows,
                    },
                });
            }
            catch (e) {
                console.log(e);
            }
        });
        this.database = database;
    }
}
exports.default = TodoController;
//# sourceMappingURL=todo.controller.js.map