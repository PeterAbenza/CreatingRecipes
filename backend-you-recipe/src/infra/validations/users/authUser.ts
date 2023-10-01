import {Joi, validate} from "express-validation";

const authRegistro = validate({
    body: Joi.object({
        nome: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required(),
    })
});

const authLogin = validate({
    body: Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().required(),
    })
});

export {
    authRegistro, 
    authLogin
};