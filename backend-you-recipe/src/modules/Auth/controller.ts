import User from "../../models/Users";
import { Request, Response } from "express";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import secret from "../../infra/config/secret";

const authController = {

    async authLogin( req: Request, res :Response ) {
        const {email, password} = req.body

        const usuario = await User.findOne(
            {
            email: email,
            }
        );

        if(!usuario){
            return res.status(400).json("email invalido!")
        }
        if(!bcrypt.compareSync(password, usuario.password)){
            return res.status(401).json("email ou password invalido!");
        }

        const token = jwt.sign({
            id: usuario._id, 
            nome: usuario.nome, 
            email: usuario.credential
        }, secret.key );

        return res.json({
            id: usuario._id,
            nome: usuario.nome,
            credential: usuario.credential,
            token: token
        })
    }
}

export default authController;


