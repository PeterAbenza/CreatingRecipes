import { Router } from 'express';
import userControllers from "./controller"

const userRoutes = Router();

userRoutes.post("/register", userControllers.create)

export default userRoutes;