import cryptoProvider from "../../infra/providers/bcryptjs";
import User from "../../models/Users";
import { Request, Response } from "express";

const userControllers = {
    async create(req: Request, res: Response) {
        const { nome, email, password } = req.body;

        const newSenha = cryptoProvider.hashSync(password, 10);

        try {
            const newUser = await User.create({
                nome,
                email,
                password: newSenha,
            });

            return res.status(201).json(newUser);
        } catch (error) {
            return res.status(201).json(`Erro ao tentar criar registro: ${error}`);
        }
    }
};

export default userControllers;
