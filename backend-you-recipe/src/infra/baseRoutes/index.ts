import { Router } from 'express';
import userRoutes from '../../modules/Users/routes';

const routes= Router();

routes.use(userRoutes)

export default routes;