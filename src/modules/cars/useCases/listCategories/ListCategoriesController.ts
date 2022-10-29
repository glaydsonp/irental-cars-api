import { Request, Response } from 'express';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

export class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  handle(_request: Request, response: Response): Response {
    const all = this.listCategoriesUseCase.execute();

    return response.status(201).send(all);
  }
}
