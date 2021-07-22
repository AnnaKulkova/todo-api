"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { env } = process;
const config = {
    db: {
        host: env.DB_HOST || 'localhost',
        port: env.DB_PORT || 5432,
        user: env.DB_PORT || 'postgres',
        password: env.DB_PASSWORD || 'postgres',
        database: env.DB_NAME || 'todo'
    }
};
exports.default = config;
//# sourceMappingURL=config.js.map