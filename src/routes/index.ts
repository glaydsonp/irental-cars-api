import { Router } from 'express';
import categoriesRouter from './categories.routes';
import specificationsRouter from './specification.routes';

const routes = Router();

routes.use('/categories', categoriesRouter);
routes.use('/specification', specificationsRouter);

export default routes;
