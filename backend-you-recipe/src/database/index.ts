import authDB  from "../infra/config/authDB"
import Conection from "./Conection";

const mySqlConection = new Conection(authDB.database, authDB.username, authDB.password, {
    dialect: 'mysql',
    port: authDB.port,
    host: authDB.host,
});

export default mySqlConection