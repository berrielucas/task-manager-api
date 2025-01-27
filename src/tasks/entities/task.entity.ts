import { CategoryEntity } from 'src/categories/entities/category.entity';

export class TaskEntity {
  id: number;
  title: string;
  description?: string;
  status: string;
  category: CategoryEntity;
}
