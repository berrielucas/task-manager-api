import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoryEntity } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  private readonly categories: CategoryEntity[] = [];
  private lastID = 0;

  findAll(): CategoryEntity[] {
    return this.categories;
  }

  findOne(id: number): CategoryEntity {
    const category = this.categories.find((c) => c.id === id);
    if (category) return category;
    throw new NotFoundException('Category not found.');
  }

  create(body: CreateCategoryDto): CategoryEntity {
    this.lastID++;
    const categoryCreated = {
      id: this.lastID,
      ...body,
    };
    this.categories.push(categoryCreated);
    return categoryCreated;
  }

  update(id: number, body: UpdateCategoryDto) {
    const categoryIndex = this.categories.findIndex((c) => c.id === id);
    if (categoryIndex >= 0) {
      const categoryUpdated = this.categories[categoryIndex];
      this.categories[categoryIndex] = {
        ...categoryUpdated,
        ...body,
      };
      return {
        message: "Category updated successfully",
        data: this.categories[categoryIndex]
      };
    }
    throw new NotFoundException('Category not found.');
  }

  remove(id: number) {
    const categoryIndex = this.categories.findIndex((c) => c.id === id);
    if (categoryIndex >= 0) {
      const categoryRemoved = this.categories[categoryIndex];
      this.categories.splice(categoryIndex, 1);
      return {
        message: "Category removed successfully",
        data: categoryRemoved
      };
    }
    throw new NotFoundException('Category not found.');
  }
}
