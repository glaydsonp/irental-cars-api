import { Router } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';

// root route: categories
const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRouter.get('/', (req, res) => {
  const categories = categoriesRepository.list();

  return res.send(categories);
});

categoriesRouter.post('/', (req, res) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  try {
    createCategoryService.execute({ name, description });
  } catch (error) {
    return res.status(400).send({ error });
  }

  return res.status(201).send({ message: 'Category created succesfully!' });
});

export default categoriesRouter;
