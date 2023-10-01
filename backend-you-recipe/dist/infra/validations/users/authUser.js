"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authLogin = exports.authRegistro = void 0;
const express_validation_1 = require("express-validation");
const authRegistro = (0, express_validation_1.validate)({
    body: express_validation_1.Joi.object({
        nome: express_validation_1.Joi.string().required(),
        email: express_validation_1.Joi.string().required().email(),
        password: express_validation_1.Joi.string().required(),
    })
});
exports.authRegistro = authRegistro;
const authLogin = (0, express_validation_1.validate)({
    body: express_validation_1.Joi.object({
        email: express_validation_1.Joi.string().required().email(),
        password: express_validation_1.Joi.string().required(),
    })
});
exports.authLogin = authLogin;
