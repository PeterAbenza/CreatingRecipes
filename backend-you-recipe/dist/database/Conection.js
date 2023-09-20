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
const sequelize_1 = require("sequelize");
class Conection {
    constructor(DBNAME, DBUSER, DBPASS, DBCONFIG) {
        try {
            this.DB_NAME = DBNAME;
            this.DB_USER = DBUSER;
            this.DB_PASS = DBPASS;
            this.DB_CONFIG = DBCONFIG;
            this.instance = new sequelize_1.Sequelize(DBNAME, DBUSER, DBPASS, DBCONFIG);
            console.log(`Banco: ${this.DB_NAME} conectado`);
        }
        catch (error) {
            console.log(`Banco: Erro de conexão`, error);
        }
    }
    getInstance() {
        return this.instance;
    }
    hasConection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.instance.authenticate();
                console.log(`Banco: ${this.DB_NAME} funcionando!`);
            }
            catch (error) {
                console.log(`Banco: Erro de conexão`, error);
            }
        });
    }
}
exports.default = Conection;
;
