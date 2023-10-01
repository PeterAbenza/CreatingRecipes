import { Router } from "express";
import {authLogin} from "../../infra/validations/users/authUser"
import authController from "./controller";

const authRoutes = Router();

authRoutes.post("/login", authController.authLogin)

export default authRoutes;