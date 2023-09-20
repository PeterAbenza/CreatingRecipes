"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authDB_1 = __importDefault(require("../infra/config/authDB"));
const Conection_1 = __importDefault(require("./Conection"));
const mySqlConection = new Conection_1.default(authDB_1.default.database, authDB_1.default.username, authDB_1.default.password, {
    dialect: 'mysql',
    port: authDB_1.default.port,
    host: authDB_1.default.host,
});
exports.default = mySqlConection;
