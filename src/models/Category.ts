import { v4 as uuidV4 } from 'uuid';

export class Category {
  private id: string;
  private name: string;
  private description: string;
  private createdAt: Date;

  constructor(initializer: { id?: string; name: string; description: string }) {
    this.id = initializer.id || uuidV4();
    this.name = initializer.name;
    this.description = initializer.description;
    this.createdAt = new Date();
  }

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }
}
