import { Specification } from '../../models/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from '../ISpecificationRepository';

export class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[];
  private static INSTANCE: SpecificationRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstace(): SpecificationRepository {
    if (!SpecificationRepository.INSTANCE) {
      SpecificationRepository.INSTANCE = new SpecificationRepository();
    }

    return SpecificationRepository.INSTANCE;
  }

  list(): Specification[] {
    return this.specifications;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification({ name, description });

    this.specifications.push(specification);
  }

  findByName(name: string): Specification | undefined {
    return this.specifications.find(
      (Specification) => Specification.name === name
    );
  }

  findById(id: string): Specification | undefined {
    return this.specifications.find((category) => category.id === id);
  }
}
