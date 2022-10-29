import { Category } from '../models/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from './ICategoriesRepository';

export class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  list(): Category[] {
    return this.categories;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category({ name, description });

    this.categories.push(category);
  }

  findByName(name: string): Category | undefined {
    return this.categories.find((category) => category.name === name);
  }

  findById(id: string): Category | undefined {
    return this.categories.find((category) => category.id === id);
  }
}
