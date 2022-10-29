import { v4 as uuidV4 } from 'uuid';

export class Category {
  id: string;
  name: string;
  description: string;
  createdAt: Date;

  constructor(initializer: { id?: string; name: string; description: string }) {
    this.id = initializer.id || uuidV4();
    this.name = initializer.name;
    this.description = initializer.description;
    this.createdAt = new Date();
  }
}
