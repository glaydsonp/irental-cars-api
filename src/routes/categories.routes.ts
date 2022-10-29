import { Router } from 'express';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

// root route: categories
const categoriesRouter = Router();

categoriesRouter.get('/', (req, res) => {
  return listCategoriesController.handle(req, res);
});

categoriesRouter.post('/', (req, res) => {
  return createCategoryController.handle(req, res);
});

export default categoriesRouter;
