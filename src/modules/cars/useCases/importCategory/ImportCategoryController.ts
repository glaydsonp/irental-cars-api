import { Request, Response } from 'express';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

export class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

  handle(req: Request, res: Response): Response {
    const { file } = req;

    if (!file) {
      return res.status(400).send();
    }

    this.importCategoryUseCase.execute(file);

    return res.send();
  }
}
