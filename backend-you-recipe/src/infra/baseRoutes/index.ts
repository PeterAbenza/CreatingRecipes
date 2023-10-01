import { Router } from 'express';
import userRoutes from '../../modules/Users/routes';
import Error from '../middlewares/error';
import authRoutes from "../../modules/Auth/routes";

const routes= Router();

routes.use(userRoutes);
routes.use(authRoutes);

routes.use(Error);
export default routes;