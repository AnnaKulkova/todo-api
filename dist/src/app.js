"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
class App {
    constructor(router) {
        this.listen = (port) => {
            this._app.listen(port, (err) => {
                if (err) {
                    return console.error(err);
                }
                return console.log(`server is listening on ${port}`);
            });
        };
        this._app = express_1.default();
        this._app.use(express_1.default.urlencoded({ extended: true }));
        this._app.use(express_1.default.json());
        this._app.use(express_1.default.json({ type: 'application/vnd.api+json' }));
        this._app.use(cors_1.default());
        this._app.use(router);
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map