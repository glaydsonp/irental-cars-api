import { Router } from 'express';
import { SpecificationRepository } from '../modules/cars/repositories/implementations/SpecificationRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

// root route: specifications
const specificationsRouter = Router();
const specificationsRepository = new SpecificationRepository();

specificationsRouter.get('/', (req, res) => {
  const categories = specificationsRepository.list();

  return res.send(categories);
});

specificationsRouter.post('/', (req, res) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateSpecificationService(
    specificationsRepository
  );

  try {
    createCategoryService.execute({ name, description });
  } catch (error) {
    return res.status(400).send({ error });
  }

  return res
    .status(201)
    .send({ message: 'Specification created succesfully!' });
});

export default specificationsRouter;
