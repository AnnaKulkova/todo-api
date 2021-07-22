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
exports.default = {
    createTodo: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('start post');
        const id = String(Date.now());
        const { title, description, color } = req.body;
        // const { rows } = await db.query(
        //   'INSERT INTO Todos (id, title, description, color, completed) VALUES ($1, $2, $3)',
        //   [id, title, description, color, false]
        // );
        res.status(201).send({
            message: 'Todo created',
            // body: {
            //   todos: rows
            // }
        });
    })
};
//# sourceMappingURL=todo.controller.js.map