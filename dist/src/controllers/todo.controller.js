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
function todoController(database) {
    return {
        createTodo: (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = String(Date.now());
            const { title, description, color } = req.body;
            try {
                yield database.query('INSERT INTO todos (id, title, description, color, completed) VALUES ($1, $2, $3, $4, $5)', [id, title, description, color, false]);
                res.status(201).send({
                    message: 'Todo created',
                    body: {
                        todo: { id, title, description, color, completed: false }
                    }
                });
            }
            catch (e) {
                console.log(e);
            }
        }),
        getAllTodos: (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield database.query('SELECT * from todos');
                res.status(201).send({
                    body: {
                        todos: response.rows,
                    },
                });
                return response.rows;
            }
            catch (e) {
                console.log(e);
            }
        }),
        changeTodo: (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { title, description, color, completed } = req.body;
            try {
                yield database.query(`
            UPDATE todos 
            SET completed=${completed},
                title='${title}',
                description='${description}',
                color='${color}'
            WHERE id='${req.query.id}'`);
                res.status(201).send({
                    message: 'Todo updated',
                    body: { id: req.query.id, description, color, completed, title }
                });
            }
            catch (e) {
                console.log(e);
            }
        }),
        deleteTodo: (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield database.query(`DELETE FROM todos WHERE id='${req.query.id}'`);
                res.status(201).send({
                    message: 'Todo deleted',
                    body: { id: req.query.id },
                });
            }
            catch (e) {
                console.log(e);
            }
        })
    };
}
exports.default = todoController;
//# sourceMappingURL=todo.controller.js.map