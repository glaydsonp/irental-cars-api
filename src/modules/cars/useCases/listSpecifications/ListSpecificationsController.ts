import { Request, Response } from 'express';
import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';

export class ListSpecificationsController {
  constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}

  handle(_request: Request, response: Response): Response {
    const specifications = this.listSpecificationsUseCase.execute();

    return response.send(specifications);
  }
}
