import { Router } from 'express';
import { createSpecificationController } from '../modules/cars/useCases/createSpecification';
import { listSpecificationsController } from '../modules/cars/useCases/listSpecifications';

// root route: specification
const specificationsRouter = Router();

specificationsRouter.get('/', (req, res) => {
  return listSpecificationsController.handle(req, res);
});

specificationsRouter.post('/', (req, res) => {
  return createSpecificationController.handle(req, res);
});

export default specificationsRouter;
