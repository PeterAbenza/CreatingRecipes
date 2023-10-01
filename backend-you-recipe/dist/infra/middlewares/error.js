"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validation_1 = require("express-validation");
const Error = (error, //seguir esse padrão de parametros para errors.
request, response, next) => {
    // "instanceof" se ele é do tipo:
    if (error instanceof express_validation_1.ValidationError) {
        return response.status(error.statusCode).json(error);
    }
    return response.status(500).json(error);
};
exports.default = Error;
