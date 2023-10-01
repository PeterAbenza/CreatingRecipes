import { expressjwt }  from "express-jwt";
import secret from "../config/secret";

const algo = "HS256"

// para bloquar caso não esteja autenticado!

const AuthAdm = expressjwt({
    secret: secret.key,
    algorithms: [algo]
});

export default AuthAdm;