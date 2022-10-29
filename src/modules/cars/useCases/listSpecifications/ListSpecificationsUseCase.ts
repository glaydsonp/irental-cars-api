import { Specification } from '../../models/Specification';
import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository';

export class ListSpecificationsUseCase {
  constructor(private specificationsRepository: SpecificationRepository) {}

  execute(): Specification[] {
    return this.specificationsRepository.list();
  }
}
