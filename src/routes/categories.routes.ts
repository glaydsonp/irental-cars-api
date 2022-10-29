import { Router } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory';

// root route: categories
const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRouter.get('/', (req, res) => {
  const categories = categoriesRepository.list();

  return res.send(categories);
});

categoriesRouter.post('/', (req, res) => {
  return createCategoryController.handle(req, res);
});

export default categoriesRouter;
