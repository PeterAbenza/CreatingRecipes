import {NextFunction, Request, Response, } from "express";
import { ValidationError } from "express-validation";

const Error = (
    error: any ,       //seguir esse padrão de parametros para errors.
    request: Request, 
    response: Response,
    next: NextFunction
    ) => {
    // "instanceof" se ele é do tipo:
    if(error instanceof ValidationError){
        return response.status(error.statusCode).json(error)
    }

    return response.status(500).json(error);
};

export default Error;