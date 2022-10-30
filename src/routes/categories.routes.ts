import { Router } from 'express';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';
import multer from 'multer';
import { importCategoryController } from '../modules/cars/useCases/importCategory';

// root route: categories
const categoriesRouter = Router();
const upload = multer({
  dest: './temp',
});

categoriesRouter.get('/', (req, res) => {
  return listCategoriesController.handle(req, res);
});

categoriesRouter.post('/', (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRouter.post('/import', upload.single('file'), (req, res) => {
  return importCategoryController.handle(req, res);
});

export default categoriesRouter;
