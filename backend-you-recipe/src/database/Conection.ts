import {Sequelize, Options} from "sequelize"
import authDB  from "../infra/config/authDB"

export default class Conection {
    private instance: Sequelize;
    private DB_NAME: string;
    private DB_USER: string;
    private DB_PASS: string;
    private DB_CONFIG: Options;

    constructor(
    DBNAME: string,
    DBUSER: string,
    DBPASS: string,
    DBCONFIG: Options
    ) {
        try {
            this.DB_NAME = DBNAME;
            this.DB_USER = DBUSER;
            this.DB_PASS = DBPASS;
            this.DB_CONFIG = DBCONFIG;

            this.instance = new Sequelize(DBNAME, DBUSER, DBPASS, DBCONFIG);
            console.log(`Banco: ${this.DB_NAME} conectado`)
        } catch (error) {
            console.log(`Banco: Erro de conexão`, error)
        }
    }

    getInstance() {
        return this.instance;
    }
    async hasConection() {
        try {
            await this.instance.authenticate();
            console.log(`Banco: ${this.DB_NAME} funcionando!`)
        } catch (error) {
            console.log(`Banco: Erro de conexão`, error)
        }
    }
};


