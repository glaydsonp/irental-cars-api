import { Router } from 'express';
import { Category } from '../models/Category';

const categories: Category[] = [];

const categoriesRouter = Router();

// root route: categories
categoriesRouter.post('/', (req, res) => {
  const { name, description } = req.body;

  const category = new Category({ name, description });

  categories.push(category);

  return res
    .status(201)
    .send({ message: 'Category created succesfully!', data: category });
});

export default categoriesRouter;
