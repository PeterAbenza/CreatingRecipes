import { Router } from 'express';
import userControllers from "./controller"
import {authRegistro} from '../../infra/validations/users/authUser';

const userRoutes = Router();

userRoutes.post("/register", authRegistro, userControllers.create);

export default userRoutes;