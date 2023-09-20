"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authDB = {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
};
exports.default = authDB;
